import { profile } from '../data/profile'
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
    help: () =>
      'help · whoami · about · projects · skills · experience · contact · github · linkedin · clear · theme',
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
  const command = input.trim().toLowerCase()
  return Object.hasOwn(commands, command)
    ? commands[command]()
    : `Comando “${command}” não encontrado. Digite help para ver as opções.`
}
export const completeCommand = (input: string, commands: string[]) =>
  commands.filter((command) => command.startsWith(input.trim().toLowerCase()))
