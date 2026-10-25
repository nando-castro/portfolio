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
    role: 'Desenvolvimento Full Stack',
    company: 'SEAP — Maranhão',
    period: '',
    responsibilities: [
      'Atuação em diversos sistemas do Estado do Maranhão, do desenvolvimento de APIs às interfaces frontend.',
      'Refatoração de sistemas legados.',
      'Participação na construção de um sistema de reconhecimento facial implementado nas unidades prisionais.',
    ],
    technologies: [],
  },
]
