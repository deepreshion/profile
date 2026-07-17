import { Code2, Layers3, Gauge, Users, MapPin, Languages, Clock3, Rocket, GitFork } from 'lucide-vue-next'
import type { Component } from 'vue'
import { portfolioMessages, type PortfolioLocale } from '~/i18n/messages'

type IconKey = 'code' | 'layers' | 'gauge' | 'users' | 'mapPin' | 'languages' | 'clock' | 'rocket' | 'gitFork'
type IconItem<T extends Record<string, unknown>> = T & { icon: Component }

const iconMap: Record<IconKey, Component> = {
  code: Code2,
  layers: Layers3,
  gauge: Gauge,
  users: Users,
  mapPin: MapPin,
  languages: Languages,
  clock: Clock3,
  rocket: Rocket,
  gitFork: GitFork
}

const withIcon = <T extends { icon: string }>(item: T): IconItem<Omit<T, 'icon'>> => ({
  ...item,
  icon: iconMap[item.icon as IconKey]
})

const sharedSkills = [
  ['Frontend Architecture', 92],
  ['Platform Engineering', 90],
  ['Testing & QA Automation', 88],
  ['Technical Leadership', 90],
  ['Performance Optimization', 88],
  ['Code Review & Mentoring', 85],
  ['Legacy Modernization', 87],
  ['Technical Planning', 88]
] as const

const sharedTechnologies = ['Vue.js', 'Nuxt', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite', 'Pinia', 'Quasar', 'DevExtreme', 'Vitest', 'Cypress']

export const usePortfolioContent = () => {
  const { locale } = useI18n()
  return computed(() => portfolioMessages[locale.value as PortfolioLocale])
}

export const usePortfolio = () => {
  const content = usePortfolioContent()

  return {
    skills: sharedSkills,
    technologies: sharedTechnologies,
    projects: computed(() => content.value.projects),
    experience: computed(() => content.value.experience),
    stats: computed(() => content.value.stats.items),
    statSummary: computed(() => content.value.stats),
    capabilities: computed(() => content.value.capabilities.map(withIcon)),
    interests: computed(() => ({
      ...content.value.interests,
      items: content.value.interests.items.map(withIcon)
    })),
    details: computed(() => content.value.details.map(withIcon))
  }
}
