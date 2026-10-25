export interface Experience {
  id: string
  role: string
  company: string
  period: string
  responsibilities: string[]
  technologies: string[]
}
export const experience: Experience[] = [
  {
    id: 'seap-ma',
    role: 'Desenvolvedor Full Stack',
    company: 'SEAP — Maranhão',
    period: '03/2023 — atual · término previsto em 12/2026',
    responsibilities: [
      'Atuação em diversos sistemas do Estado do Maranhão, do desenvolvimento de APIs às interfaces frontend.',
      'Refatoração de sistemas legados.',
      'Participação na construção de um sistema de reconhecimento facial implementado nas unidades prisionais.',
    ],
    technologies: ['React', 'Node.js', 'Java', 'Python'],
  },
]
