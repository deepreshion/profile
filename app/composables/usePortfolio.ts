import { Code2, Layers3, Gauge, Users, MapPin, Languages, Clock3 } from 'lucide-vue-next'

export const usePortfolio = () => {
  const skills = [
    ['Vue', 95], ['Nuxt', 95], ['TypeScript', 94], ['JavaScript', 92],
    ['Tailwind', 90], ['HTML / CSS', 95], ['Testing', 86], ['Architecture', 91], ['Performance', 93]
  ] as const

  const technologies = ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind', 'Pinia', 'Git', 'Docker', 'Vite', 'Vitest']

  const projects = [
    { number: '01', title: 'Pulse Analytics', description: 'A real-time product analytics workspace that turns complex behavioral data into clear decisions.', stack: ['Nuxt', 'TypeScript', 'D3'], tone: 'lime' },
    { number: '02', title: 'Atlas Commerce', description: 'Headless storefront architecture built for international scale, speed, and editorial flexibility.', stack: ['Vue', 'GraphQL', 'Pinia'], tone: 'silver' },
    { number: '03', title: 'Orbit Workspace', description: 'A collaborative planning platform with a performant canvas and thoughtful team workflows.', stack: ['Nuxt', 'WebSockets', 'Vitest'], tone: 'graphite' },
    { number: '04', title: 'Forma Design System', description: 'A multi-brand component system supporting accessible, consistent product development.', stack: ['Vue', 'Storybook', 'Tokens'], tone: 'olive' }
  ]

  const experience = [
    { years: '2022 — NOW', company: 'Northstar Labs', role: 'Senior Frontend Engineer', achievements: ['Led a frontend platform used by six product teams', 'Improved Core Web Vitals by 42%', 'Mentored engineers and established architecture standards'] },
    { years: '2019 — 2022', company: 'Forma Digital', role: 'Frontend Engineer', achievements: ['Built a multi-brand Vue design system', 'Reduced release time through test automation', 'Shipped international commerce experiences'] },
    { years: '2017 — 2019', company: 'Independent', role: 'Frontend Developer', achievements: ['Delivered 20+ products for growing teams', 'Owned discovery, UX implementation, and launch'] }
  ]

  const stats = [['Frontend', 95], ['Architecture', 90], ['Performance', 92], ['UX', 88], ['Leadership', 80], ['Problem Solving', 97], ['Communication', 85]] as const

  const capabilities = [
    { icon: Code2, title: 'Frontend systems', text: 'Accessible interfaces engineered for long-term change.' },
    { icon: Gauge, title: 'Performance', text: 'Fast experiences grounded in measurement, not guesswork.' },
    { icon: Layers3, title: 'Architecture', text: 'Scalable foundations that keep teams moving.' },
    { icon: Users, title: 'Team leadership', text: 'Clear standards, pragmatic mentorship, shared ownership.' }
  ]

  const details = [
    { icon: MapPin, label: 'Location', value: 'Amsterdam, NL' },
    { icon: Clock3, label: 'Experience', value: '8+ years' },
    { icon: Languages, label: 'Languages', value: 'English, Russian' }
  ]

  return { skills, technologies, projects, experience, stats, capabilities, details }
}
