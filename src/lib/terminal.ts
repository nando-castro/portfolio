import { profile } from '../data/profile'
import { conversations } from '../data/conversations'
export const normalizeCommand = (input: string) =>
  input
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
export type Section =
  'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact'
export interface TerminalActions {
  navigate: (section: Section) => void
  toggleTheme: () => void
  open: (url: string) => void
  hasExperience: boolean
}
export function createCommands(
  actions: TerminalActions,
): Record<string, () => string> {
  const go = (section: Section, label: string) => () => {
    actions.navigate(section)
    return `Abrindo ${label}.`
  }
  const link = (url: string, label: string) => () => {
    if (!url) return `${label} ainda não configurado.`
    actions.open(url)
    return `Abrindo ${label}.`
  }
  return {
    ...Object.fromEntries(
      conversations.flatMap(({ phrases, response }) =>
        phrases.map((phrase) => [normalizeCommand(phrase), () => response]),
      ),
    ),
    help: () =>
      'Comandos: help · whoami · about · projects · skills · experience · contact · github · linkedin · clear · theme\nConverse também: hello · heloo · olá · tudo bem? · bom dia · quem é você? · obrigado · tchau · café',
    whoami: () => `${profile.name} — ${profile.role}. ${profile.headline}`,
    about: go('about', 'Sobre'),
    projects: go('projects', 'Projetos'),
    skills: go('skills', 'Habilidades'),
    contact: go('contact', 'Contato'),
    experience: () =>
      actions.hasExperience
        ? go('experience', 'Experiência')()
        : 'Experiência ainda não cadastrada.',
    github: link(profile.github, 'GitHub'),
    linkedin: link(profile.linkedin, 'LinkedIn'),
    clear: () => '',
    theme: () => {
      actions.toggleTheme()
      return 'Cor de destaque alternada.'
    },
  }
}
export function executeCommand(
  input: string,
  commands: Record<string, () => string>,
) {
  const command = normalizeCommand(input)
  return Object.hasOwn(commands, command)
    ? commands[command]()
    : `Comando ou conversa “${input.trim()}” não encontrado. Digite help para ver as opções ou experimente olá.`
}
export const completeCommand = (input: string, commands: string[]) =>
  commands.filter((command) =>
    normalizeCommand(command).startsWith(normalizeCommand(input)),
  )
