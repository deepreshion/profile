<script setup lang="ts">
import { ArrowUpRight, Github } from 'lucide-vue-next'

const { projects } = usePortfolio()
const content = usePortfolioContent()
</script>

<template>
  <section id="projects" class="projects section-pad" aria-labelledby="projects-title">
    <div class="section-header" data-reveal><div><div class="section-kicker">{{ content.sections.projectsKicker }}</div><h2 id="projects-title">{{ content.sections.projectsTitle }}</h2></div><p>{{ content.sections.projectsText }}</p></div>
    <div class="project-grid">
      <article v-for="(project, i) in projects" :key="project.number" class="project-card" data-reveal data-project-card>
        <div class="project-art" :class="project.tone"><span>{{ project.number }}</span><div class="art-window" data-parallax-art><i /><i /><i /></div></div>
        <div class="project-body"><div class="project-top"><h3>{{ project.title }}</h3><span>{{ project.number }}</span></div><p>{{ project.description }}</p><div class="project-bottom"><div class="tags"><span v-for="tag in project.stack" :key="tag">{{ tag }}</span></div><div class="project-links"><a :href="project.source ?? 'https://github.com/deepreshion'" target="_blank" :aria-label="`${project.title} ${content.projectLinks.github}`"><Github :size="17" /></a><a href="#contact" :aria-label="`${content.projectLinks.discuss} ${project.title}`"><ArrowUpRight :size="18" /></a></div></div></div>
      </article>
    </div>
  </section>
</template>
