export const categories = [
  'Todos',
  'Frontend',
  'Full Stack',
  'Automação',
  'Mobile',
] as const
export type Category = (typeof categories)[number]
export interface Project {
  id: string
  name: string
  subtitle: string
  description: string
  category: Exclude<Category, 'Todos'>
  technologies: string[]
  problem: string
  solution: string
  features: string[]
  decisions: string[]
  status: string
  repository: string
  demo: string
  image?: string
  imageAlt?: string
  featured?: boolean
  additionalRepositories?: { label: string; url: string }[]
  demoLabel?: string
}
export const projects: Project[] = [
  {
    id: 'flora',
    featured: true,
    name: 'Flora • Catálogo digital',
    subtitle: 'Da escolha ao primeiro contato.',
    category: 'Frontend',
    description:
      'Proposta de catálogo de floricultura com carrinho e finalização pelo WhatsApp.',
    technologies: ['React', 'TypeScript'],
    problem:
      'Exemplo de problema: organizar a apresentação de flores e facilitar pedidos.',
    solution:
      'Proposta a revisar: desenvolver um catálogo responsivo com seleção de produtos e mensagem de pedido. Participação real a preencher.',
    features: [
      'Catálogo por categorias',
      'Carrinho de produtos',
      'Resumo do pedido pelo WhatsApp',
    ],
    decisions: [
      'Proposta: estado do carrinho no cliente',
      'Proposta: componentes reutilizáveis para produtos',
    ],
    status: 'Repositório informado · escopo a confirmar',
    repository: 'https://github.com/nando-castro/floricultura-misterios',
    demo: 'https://floricultura-misterios.vercel.app/',
  },
  {
    id: 'flow',
    featured: true,
    name: 'Flow • Atendimento',
    subtitle: 'Menos tarefas. Mais conversas.',
    category: 'Automação',
    description: 'Conceito de automação de atendimento para negócios locais.',
    technologies: ['Node.js', 'TypeScript', 'APIs REST'],
    problem:
      'Exemplo de problema: perguntas repetidas e triagem manual de contatos.',
    solution:
      'Proposta a revisar: organizar fluxos de atendimento e integrações. Escopo, implementação e participação real a preencher.',
    features: [
      'Triagem de solicitações',
      'Fluxos de respostas',
      'Encaminhamento para atendimento humano',
    ],
    decisions: [
      'Proposta: integrações desacopladas',
      'Proposta: validação das entradas de APIs',
    ],
    status: 'Conteúdo demonstrativo · a revisar',
    repository: '',
    demo: '',
  },
  {
    id: 'duelo',
    name: 'Duelo dos Números',
    subtitle: 'Jogo para dispositivos móveis.',
    category: 'Mobile',
    description:
      'Jogo mobile Duelo dos Números, com link para o repositório do projeto.',
    technologies: ['Stack a confirmar'],
    problem:
      'Proposta de jogo mobile. Público e mecânicas ainda não detalhados.',
    solution:
      'Projeto informado por Fernando Sousa. Detalhes da implementação e participação ainda não descritos.',
    features: [
      'Mecânicas a definir',
      'Controles por toque a validar',
      'Progressão a definir',
    ],
    decisions: [
      'Engine e linguagem a confirmar',
      'Estratégia de desempenho a definir',
    ],
    status: 'Demonstração web informada · stack a confirmar',
    repository: 'https://github.com/nando-castro/duelo-dos-numeros-game',
    demo: 'https://duelo-numeros-web.vercel.app/',
  },
  {
    id: 'agenda',
    name: 'Agendamento • App e API',
    subtitle: 'Aplicação e backend para agendamento de horários.',
    category: 'Full Stack',
    description:
      'App de agendamento de horários com repositórios separados para a interface e a API.',
    technologies: ['React', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL'],
    problem:
      'Organizar o agendamento de horários em uma aplicação com interface e backend.',
    solution:
      'Aplicação web e API em repositórios próprios. Escopo da participação e contexto de uso ainda não detalhados.',
    features: ['Agendamento de horários', 'Interface web', 'API de backend'],
    decisions: [
      'Separação entre aplicação e API',
      'React e TypeScript no frontend',
      'NestJS e Prisma no backend',
    ],
    status: 'Código disponível · entrega comercial não informada',
    repository: 'https://github.com/nando-castro/app-agendamento-saas',
    additionalRepositories: [
      {
        label: 'Repositório da API',
        url: 'https://github.com/nando-castro/api-agendamento-saas',
      },
    ],
    demo: 'https://app-agendamento-saas.vercel.app/',
  },
  {
    id: 'sedallis',
    name: 'Sistema da Sedallis',
    subtitle: 'Projeto empresarial informado.',
    category: 'Full Stack',
    description:
      'Sistema da Sedallis, com link para o site da empresa. Escopo técnico e participação a detalhar.',
    technologies: ['Stack a confirmar'],
    problem: 'Contexto e necessidades do sistema ainda não informados.',
    solution:
      'Projeto incluído conforme informado por Fernando Sousa. Responsabilidades, escopo e entregas ainda não detalhados.',
    features: ['Funcionalidades não detalhadas'],
    decisions: ['Arquitetura e tecnologias a confirmar'],
    status: 'Projeto informado · participação a detalhar',
    repository: '',
    demo: 'https://sedallis.com.br/',
    demoLabel: 'Site da empresa',
  },
]
export const featuredProjects = projects.filter((project) => project.featured)
export const filterProjects = (items: Project[], category: Category) =>
  items.filter(
    (project) => category === 'Todos' || project.category === category,
  )
