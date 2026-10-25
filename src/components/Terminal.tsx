import { useRef, useState } from 'react'
import { Terminal as TerminalIcon, X } from 'lucide-react'
import {
  completeCommand,
  createCommands,
  executeCommand,
  normalizeCommand,
  type TerminalActions,
} from '../lib/terminal'
export function Terminal({
  actions,
  close,
}: {
  actions: TerminalActions
  close: () => void
}) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [position, setPosition] = useState(0)
  const [lines, setLines] = useState([
    'Terminal do portfólio. Digite help para explorar ou olá para conversar.',
  ])
  const output = useRef<HTMLDivElement>(null)
  const commands = createCommands(actions)
  return (
    <section className="terminal" aria-label="Terminal interativo">
      <div className="terminal-heading">
        <span>
          <TerminalIcon size={15} /> TERMINAL
        </span>
        <button onClick={close} aria-label="Fechar terminal">
          <X size={18} />
        </button>
      </div>
      <div
        ref={output}
        className="terminal-output"
        role="log"
        aria-live="polite"
      >
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (!input.trim()) return
          const result = executeCommand(input, commands)
          setLines((old) =>
            normalizeCommand(input) === 'clear'
              ? []
              : [...old, `❯ ${input}`, result],
          )
          setHistory((old) => [...old, input])
          setPosition(history.length + 1)
          setInput('')
          requestAnimationFrame(() =>
            output.current?.scrollTo(0, output.current.scrollHeight),
          )
        }}
      >
        <label htmlFor="command">
          fernando <span>~/portfolio</span> ❯
        </label>
        <input
          id="command"
          value={input}
          autoComplete="off"
          spellCheck={false}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
              event.preventDefault()
              const next = Math.max(
                0,
                Math.min(
                  history.length,
                  position + (event.key === 'ArrowUp' ? -1 : 1),
                ),
              )
              setPosition(next)
              setInput(history[next] ?? '')
            }
            if (event.key === 'Tab' && input.trim()) {
              const matches = completeCommand(input, Object.keys(commands))
              if (matches.length) {
                event.preventDefault()
                if (matches.length === 1) setInput(matches[0])
                else setLines((old) => [...old, matches.join(' · ')])
              }
            }
          }}
          aria-label="Comando do terminal"
        />
        <button type="submit">Executar ↵</button>
      </form>
    </section>
  )
}
