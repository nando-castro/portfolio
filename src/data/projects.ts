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
}
export const projects: Project[] = [
  {
    id: 'flora',
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
    status: 'Conteúdo demonstrativo · a revisar',
    repository: '',
    demo: '',
  },
  {
    id: 'flow',
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
    id: 'orbit',
    name: 'Orbit • Jogo mobile',
    subtitle: 'Uma ideia em movimento.',
    category: 'Mobile',
    description:
      'Espaço para apresentar um jogo mobile, suas mecânicas e decisões de desenvolvimento.',
    technologies: ['Stack a confirmar'],
    problem: 'Definir o público, a proposta do jogo e o desafio de interação.',
    solution:
      'Conceito demonstrativo. Mecânicas, plataforma, solução e participação real a preencher.',
    features: [
      'Mecânicas a definir',
      'Controles por toque a validar',
      'Progressão a definir',
    ],
    decisions: [
      'Engine e linguagem a confirmar',
      'Estratégia de desempenho a definir',
    ],
    status: 'Conteúdo demonstrativo · a revisar',
    repository: '',
    demo: '',
  },
]
export const filterProjects = (items: Project[], category: Category) =>
  items.filter(
    (project) => category === 'Todos' || project.category === category,
  )
