<script setup lang="ts">
import { Braces, UserRound, Box } from 'lucide-vue-next'

const { skills, technologies, details } = usePortfolio()
const content = usePortfolioContent()

const techIconMap: Record<string, { color: string, paths: string[] }> = {
  'Vue.js': {
    color: '#41b883',
    paths: [
      'M2 3h5l5 8.7L17 3h5L12 20 2 3Z',
      'M7 3h3l2 3.5L14 3h3l-5 8.7L7 3Z'
    ]
  },
  Nuxt: {
    color: '#00dc82',
    paths: ['M8.2 18.5H3.4L10.5 6.2l2.4 4.1-4.7 8.2Zm4.4 0h8L15 8.8l-2.4 4.1 3.2 5.6h-3.2Z']
  },
  TypeScript: {
    color: '#3178c6',
    paths: ['M3 3h18v18H3V3Zm3.2 7.1h8.3V8.2H6.2v1.9Zm3.1 7.6h2.1v-7.6H9.3v7.6Zm6.1-.1c.5.3 1.3.4 2.1.4 2.1 0 3.5-1.1 3.5-2.9 0-1.6-.9-2.3-2.7-3.1-.9-.4-1.2-.7-1.2-1.2 0-.5.4-.8 1.1-.8.7 0 1.2.2 1.7.5l.7-1.7c-.6-.4-1.4-.6-2.4-.6-2 0-3.3 1.1-3.3 2.8 0 1.5.9 2.3 2.6 3 .9.4 1.3.7 1.3 1.3 0 .6-.5.9-1.3.9-.8 0-1.6-.2-2.2-.6l-.5 1.7Z']
  },
  JavaScript: {
    color: '#f7df1e',
    paths: ['M3 3h18v18H3V3Zm4.2 14.2c.5 1 1.5 1.6 2.9 1.6 1.8 0 3-1 3-3.2V9.1h-2v6.4c0 .9-.4 1.3-1.1 1.3-.6 0-1-.3-1.3-.9l-1.5 1.3Zm6.8-.2c.6 1.1 1.8 1.8 3.4 1.8 1.9 0 3.2-1 3.2-2.7 0-1.6-.9-2.3-2.7-3.1-.9-.4-1.2-.6-1.2-1.1s.4-.8 1-.8c.7 0 1.1.3 1.5.8l1.3-1.3c-.6-.9-1.6-1.4-2.8-1.4-1.8 0-3 1.1-3 2.7 0 1.5.9 2.2 2.6 2.9.9.4 1.3.7 1.3 1.2 0 .5-.4.8-1.2.8-.9 0-1.5-.4-1.9-1.1L14 17Z']
  },
  HTML: {
    color: '#e34f26',
    paths: ['M4 3h16l-1.5 16.2L12 21 5.5 19.2 4 3Zm4 5h8l-.2 2H8.2l.2 2H15l-.5 5-2.5.7-2.5-.7-.2-2h2l.1.7.6.2.6-.2.2-1.7H9.1L8 8Z']
  },
  CSS: {
    color: '#1572b6',
    paths: ['M4 3h16l-1.5 16.2L12 21l-6.5-1.8L4 3Zm4 5h8l-.2 2H10l.1 1.4h5.5l-.5 5.6-3.1.9-3.1-.9-.2-2h2l.1.7 1.2.3 1.2-.3.2-1.4H8.6L8 8Z']
  },
  Vite: {
    color: '#bd34fe',
    paths: ['M3 4.5 12 21 21 4.5l-7.2 1.4L12 9.3 10.2 5.9 3 4.5Zm7.5 6.4 1.5 2.8 1.5-2.8H18L12 18 6 10.9h4.5Z']
  },
  Pinia: {
    color: '#ffd859',
    paths: ['M7 4c1.8 0 3.1 1.5 3.1 3.7v12H5.2V7.7C5.2 5.5 5.7 4 7 4Zm10 0c1.3 0 1.8 1.5 1.8 3.7v12h-4.9v-12C13.9 5.5 15.2 4 17 4Zm-5 3c1.2 0 2 1.2 2 3v9.7h-4V10c0-1.8.8-3 2-3Z']
  },
  Quasar: {
    color: '#1976d2',
    paths: ['M12 3a9 9 0 1 0 6.4 15.4l-2.7-2.7A5.2 5.2 0 1 1 12 6.8a5.2 5.2 0 0 1 3.7 8.9l2.7 2.7A9 9 0 0 0 12 3Zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z']
  },
  DevExtreme: {
    color: '#ff7200',
    paths: ['M4 4h7.2c5.1 0 8.8 3.2 8.8 8s-3.7 8-8.8 8H4V4Zm4 3.5v9h3.1c2.8 0 4.8-1.8 4.8-4.5s-2-4.5-4.8-4.5H8Z']
  },
  Vitest: {
    color: '#6e9f18',
    paths: ['M4 4h16L12 20 4 4Zm4.5 3 3.5 7.1L15.5 7h-7Zm7 6 1.4 2.5 1.4-2.5 2.7.5-1.9-2 .4-2.7-2.6 1.2-2.4-1.2.4 2.7-1.9 2 2.5-.5Z']
  },
  Cypress: {
    color: '#69d3a7',
    paths: ['M12 3a9 9 0 1 0 7.9 13.3h-3.3A6 6 0 1 1 12 6a5.8 5.8 0 0 1 4.3 1.8l2.1-2.1A8.8 8.8 0 0 0 12 3Zm.3 5.2a3.8 3.8 0 0 0 0 7.6c1.3 0 2.3-.5 3-1.4l-1.8-1.2c-.3.3-.7.5-1.2.5-1 0-1.8-.8-1.8-1.9s.8-1.9 1.8-1.9c.5 0 .9.2 1.2.5l1.8-1.2a3.5 3.5 0 0 0-3-1.4Z']
  }
}

const techItems = computed(() => technologies.map((name) => ({
  name,
  icon: techIconMap[name] ?? {
    color: '#b7d84b',
    paths: ['M4 5h16v14H4V5Zm3 3v8h10V8H7Z']
  }
})))
</script>

<template>
  <section id="about" class="profile-grid section-pad" :aria-label="content.profile.ariaLabel">
    <article class="panel about-card reveal" data-reveal>
      <div class="panel-heading"><UserRound :size="18" /><span>{{ content.profile.aboutTitle }}</span><b>01</b></div>
      <p class="about-intro">{{ content.profile.aboutIntro }}</p>
      <p class="muted">{{ content.profile.aboutText }}</p>
      <dl class="detail-list">
        <div v-for="detail in details" :key="detail.label"><dt><component :is="detail.icon" :size="16" />{{ detail.label }}</dt><dd>{{ detail.value }}</dd></div>
      </dl>
    </article>

    <article id="skills" class="panel skills-card reveal" data-reveal>
      <div class="panel-heading"><Braces :size="18" /><span>{{ content.profile.skillsTitle }}</span><b>02</b></div>
      <div class="skill-list">
        <div v-for="([name, value], i) in skills" :key="name" class="skill-row">
          <span>{{ name }}</span><div class="skill-track"><i :data-progress="value" /></div><b>{{ value }}</b>
        </div>
      </div>
    </article>

    <article class="panel tech-card reveal" data-reveal>
      <div class="panel-heading"><Box :size="18" /><span>{{ content.profile.technologiesTitle }}</span><b>03</b></div>
      <div class="tech-grid">
        <div v-for="(tech, index) in techItems" :key="tech.name" class="tech-item" data-tech-item>
          <span class="tech-index">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="tech-icon" :style="{ color: tech.icon.color }" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path v-for="path in tech.icon.paths" :key="path" :d="path" fill="currentColor" />
            </svg>
          </span>
          <strong>{{ tech.name }}</strong>
        </div>
      </div>
    </article>
  </section>
</template>
