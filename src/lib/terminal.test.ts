import { describe, expect, it, vi } from 'vitest'
import { completeCommand, createCommands, executeCommand } from './terminal'
import { filterProjects, projects } from '../data/projects'
import { profile } from '../data/profile'
const setup = (hasExperience = false) => {
  const actions = {
    navigate: vi.fn(),
    toggleTheme: vi.fn(),
    open: vi.fn(),
    hasExperience,
  }
  return { actions, commands: createCommands(actions) }
}
describe('terminal seguro e previsível', () => {
  it('navega com normalização de espaços e maiúsculas', () => {
    const { actions, commands } = setup()
    executeCommand('  PROJECTS  ', commands)
    expect(actions.navigate).toHaveBeenCalledWith('projects')
  })
  it('trata desconhecidos e propriedades herdadas como comandos inválidos', () => {
    const { commands } = setup()
    for (const input of ['constructor', '__proto__', 'alert(1)', 'inexistente'])
      expect(executeCommand(input, commands)).toContain('não encontrado')
  })
  it('não abre links ausentes e não navega para experiência vazia', () => {
    const original = { github: profile.github, linkedin: profile.linkedin }
    try {
      profile.github = ''
      profile.linkedin = ''
      const { commands, actions } = setup()
      expect(executeCommand('github', commands)).toContain('não configurado')
      expect(executeCommand('linkedin', commands)).toContain('não configurado')
      expect(executeCommand('experience', commands)).toContain('não cadastrada')
      expect(actions.open).not.toHaveBeenCalled()
      expect(actions.navigate).not.toHaveBeenCalled()
    } finally {
      Object.assign(profile, original)
    }
  })
  it('abre links configurados e experiência disponível', () => {
    const original = profile.github
    try {
      profile.github = 'https://github.com/example'
      const { commands, actions } = setup(true)
      executeCommand('github', commands)
      executeCommand('experience', commands)
      expect(actions.open).toHaveBeenCalledWith(profile.github)
      expect(actions.navigate).toHaveBeenCalledWith('experience')
    } finally {
      profile.github = original
    }
  })
  it('alterna tema e oferece conclusão de comandos', () => {
    const { commands, actions } = setup()
    executeCommand('theme', commands)
    expect(actions.toggleTheme).toHaveBeenCalledOnce()
    expect(completeCommand('pro', Object.keys(commands))).toEqual(['projects'])
    expect(completeCommand('zz', Object.keys(commands))).toEqual([])
    expect(executeCommand('clear', commands)).toBe('')
    expect(executeCommand('whoami', commands)).toContain('Fernando Sousa')
  })
})
describe('filtros de projetos', () => {
  it('preserva todos os projetos e retorna somente a categoria solicitada', () => {
    expect(filterProjects(projects, 'Todos')).toHaveLength(5)
    expect(filterProjects(projects, 'Mobile').map((item) => item.id)).toEqual([
      'duelo',
    ])
    expect(
      filterProjects(projects, 'Full Stack').map((item) => item.id),
    ).toEqual(['agenda', 'sedallis'])
    expect(filterProjects([], 'Full Stack')).toEqual([])
    expect(projects).toHaveLength(5)
  })
})
