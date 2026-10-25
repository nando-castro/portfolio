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
      'Catálogo digital desenvolvido integralmente para a Floricultura Mistérios.',
    technologies: ['React', 'TypeScript'],
    problem:
      'Organizar a apresentação digital dos produtos de uma floricultura real.',
    solution:
      'Desenvolvimento integral do catálogo para a Floricultura Mistérios, da implementação à disponibilização do site.',
    features: [
      'Catálogo por categorias',
      'Carrinho de produtos',
      'Resumo do pedido pelo WhatsApp',
    ],
    decisions: [
      'Proposta: estado do carrinho no cliente',
      'Proposta: componentes reutilizáveis para produtos',
    ],
    status: 'Projeto para cliente · desenvolvimento integral',
    repository: 'https://github.com/nando-castro/floricultura-misterios',
    demo: 'https://floricultura-misterios.vercel.app/',
  },
  {
    id: 'flow',
    featured: true,
    name: 'Flow • Atendimento',
    subtitle: 'Menos tarefas. Mais conversas.',
    category: 'Automação',
    description:
      'Projeto pessoal de automação de atendimento para negócios locais, em desenvolvimento individual.',
    technologies: ['Node.js', 'TypeScript', 'APIs REST'],
    problem:
      'Exemplo de problema: perguntas repetidas e triagem manual de contatos.',
    solution:
      'Desenvolvimento particular e individual de uma solução de automação de atendimento. As funcionalidades descritas são planejadas e não representam uma entrega para cliente.',
    features: [
      'Planejado: triagem de solicitações',
      'Planejado: fluxos de respostas',
      'Planejado: encaminhamento para atendimento humano',
    ],
    decisions: [
      'Proposta: integrações desacopladas',
      'Proposta: validação das entradas de APIs',
    ],
    status: 'Projeto pessoal · em desenvolvimento',
    repository: '',
    demo: '',
  },
  {
    id: 'duelo',
    name: 'Duelo dos Números',
    subtitle: 'Jogo para dispositivos móveis.',
    category: 'Mobile',
    description:
      'Jogo para Android em que o objetivo é descobrir a combinação de números do adversário primeiro.',
    technologies: ['React Native', 'Expo'],
    problem:
      'Criar um desafio de dedução em que cada jogador tenta descobrir a combinação numérica do adversário antes dele.',
    solution:
      'Desenvolvimento integral do jogo com React Native e Expo. Disponível para Android, com expansão para web em planejamento.',
    features: [
      'Dedução da combinação numérica do adversário',
      'Disputa para descobrir a combinação primeiro',
      'Disponibilidade para Android',
    ],
    decisions: [
      'Desenvolvimento com React Native e Expo',
      'Android como plataforma disponível; expansão web planejada',
    ],
    status: 'Disponível para Android · expansão web planejada',
    repository: 'https://github.com/nando-castro/duelo-dos-numeros-game',
    demo: 'https://duelo-numeros-web.vercel.app/',
    demoLabel: 'Prévia web',
  },
  {
    id: 'agenda',
    name: 'Agendamento • App e API',
    subtitle: 'Aplicação e backend para agendamento de horários.',
    category: 'Full Stack',
    description:
      'Projeto pessoal de agendamento de horários com cadastro, gestão de horários e pagamentos via Pix do Mercado Pago.',
    technologies: ['React', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL'],
    problem:
      'Organizar o agendamento de horários em uma aplicação com interface e backend.',
    solution:
      'Desenvolvimento integral do app e da API como projeto pessoal, incluindo registro, cadastro e agendamento de horários e integração de pagamentos via Pix do Mercado Pago.',
    features: [
      'Registro de usuários',
      'Cadastro de horários',
      'Agendamento de horários',
      'Pagamentos com integração Mercado Pago Pix',
    ],
    decisions: [
      'Separação entre aplicação e API',
      'React e TypeScript no frontend',
      'NestJS e Prisma no backend',
      'Integração com Mercado Pago para pagamentos via Pix',
    ],
    status: 'Projeto pessoal · funcionalidades implementadas',
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
    subtitle: 'Gestão para uma clínica particular de sedação.',
    category: 'Full Stack',
    description:
      'Sistema completo de gerenciamento para uma clínica particular de sedação, com integração ao Google Calendar.',
    technologies: ['React', 'NestJS', 'PostgreSQL', 'Google Calendar API'],
    problem:
      'Atender às necessidades de gerenciamento de uma clínica particular de sedação.',
    solution:
      'Desenvolvimento da API, integração com Google Calendar e participação em partes do frontend. Também desenvolvi o site institucional da empresa, disponível no link deste projeto.',
    features: [
      'Gerenciamento da clínica de sedação',
      'Integração com Google Calendar',
      'Site institucional da empresa',
    ],
    decisions: [
      'API desenvolvida com NestJS',
      'Frontend em React',
      'Persistência em PostgreSQL',
      'Integração com Google Calendar',
    ],
    status: 'Projeto para empresa · API, integrações e frontend',
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
