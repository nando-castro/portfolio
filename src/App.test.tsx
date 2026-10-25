// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { profile } from './data/profile'
beforeEach(() => {
  window.location.hash = ''
  localStorage.clear()
  HTMLElement.prototype.scrollTo = vi.fn()
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute('open', '')
  }
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute('open')
  }
})
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})
describe('experiência do visitante', () => {
  it('mostra apresentação imediatamente, sem terminal nem links inventados', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'Fernando',
    )
    expect(screen.queryByRole('textbox')).toBeNull()
    expect(screen.queryByRole('link', { name: /GitHub/ })).toBeNull()
    expect(screen.queryByRole('button', { name: 'experience.ts' })).toBeNull()
  })
  it('navega, filtra projetos, abre e fecha detalhes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Ver projetos' }))
    await user.click(screen.getByRole('button', { name: 'Mobile' }))
    expect(screen.queryByRole('button', { name: /Flora •/ })).toBeNull()
    await user.click(screen.getByRole('button', { name: /Orbit •/ }))
    expect(screen.getByRole('dialog').textContent).toContain(
      'Decisões técnicas',
    )
    await user.click(screen.getByRole('button', { name: 'Fechar detalhes' }))
    expect(screen.queryByRole('dialog')).toBeNull()
    await user.click(screen.getByRole('button', { name: 'Full Stack' }))
    expect(screen.getByRole('status').textContent).toContain('Nenhum projeto')
  })
  it('executa comandos, autocompleta, recupera histórico e limpa saída', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Terminal' }))
    const input = screen.getByRole('textbox', { name: 'Comando do terminal' })
    await user.type(input, 'pro')
    await user.keyboard('{Tab}')
    expect((input as HTMLInputElement).value).toBe('projects')
    await user.keyboard('{Enter}')
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'Da ideia',
    )
    await user.click(input)
    await user.keyboard('{ArrowUp}')
    expect((input as HTMLInputElement).value).toBe('projects')
    await user.keyboard('{ArrowDown}')
    expect((input as HTMLInputElement).value).toBe('')
    await user.type(input, 'whoami{Enter}')
    expect(screen.getByRole('log').textContent).toContain('Fernando Sousa')
    await user.click(input)
    await user.type(input, 'clear{Enter}')
    expect(screen.getByRole('log').textContent).toBe('')
    await user.click(screen.getByRole('button', { name: 'Fechar terminal' }))
    expect(document.activeElement).toBe(
      screen.getByRole('button', { name: 'Terminal' }),
    )
  })
  it('persiste apenas a preferência de cor e tolera armazenamento bloqueado', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(
      screen.getByRole('button', { name: 'Alternar destaque verde e ciano' }),
    )
    expect(localStorage.getItem('portfolio-accent')).toBe('cyan')
    cleanup()
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('bloqueado')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('bloqueado')
    })
    render(<App />)
    await user.click(
      screen.getByRole('button', { name: 'Alternar destaque verde e ciano' }),
    )
    expect(document.documentElement.dataset.theme).toBe('cyan')
  })
  it('abre o menu com foco e fecha por Escape retornando ao botão', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: 'Abrir navegação' })
    await user.click(toggle)
    expect(document.activeElement).toBe(
      within(
        screen.getByRole('navigation', { name: 'Seções do portfólio' }),
      ).getByRole('button', { name: 'README.md' }),
    )
    await user.keyboard('{Escape}')
    expect(document.activeElement).toBe(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })
  it('responde à navegação por hash e oculta experiência vazia', async () => {
    render(<App />)
    window.location.hash = 'skills'
    fireEvent(window, new HashChangeEvent('hashchange'))
    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
        'stack',
      ),
    )
    window.location.hash = 'experience'
    fireEvent(window, new HashChangeEvent('hashchange'))
    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
        'Fernando',
      ),
    )
  })
  it('copia e-mail configurado e informa falha de permissão', async () => {
    const original = profile.email
    try {
      profile.email = 'teste@example.com'
      const user = userEvent.setup()
      const write = vi
        .spyOn(navigator.clipboard, 'writeText')
        .mockResolvedValue()
      render(<App />)
      await user.click(
        screen.getByRole('button', { name: 'Entrar em contato' }),
      )
      await user.click(screen.getByRole('button', { name: 'Copiar e-mail' }))
      expect(write).toHaveBeenCalledWith(profile.email)
      expect(screen.getByRole('status').textContent).toBe('E-mail copiado!')
      write.mockRejectedValue(new Error('denied'))
      await user.click(screen.getByRole('button', { name: 'Copiar e-mail' }))
      expect(screen.getByRole('status').textContent).toContain(
        'Não foi possível copiar',
      )
    } finally {
      profile.email = original
    }
  })
})
