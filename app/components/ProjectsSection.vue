<script setup lang="ts">
import { ArrowUpRight, Github } from 'lucide-vue-next'
const { projects } = usePortfolio()
</script>

<template>
  <section id="projects" class="projects section-pad" aria-labelledby="projects-title">
    <div class="section-header" data-reveal><div><div class="section-kicker">Selected work</div><h2 id="projects-title">Projects with purpose.</h2></div><p>A small selection of platforms and systems shaped from strategy through delivery.</p></div>
    <div class="project-grid">
      <article v-for="(project, i) in projects" :key="project.title" class="project-card" data-reveal data-project-card>
        <div class="project-art" :class="project.tone"><span>{{ project.number }}</span><div class="art-window" data-parallax-art><i /><i /><i /></div></div>
        <div class="project-body"><div class="project-top"><h3>{{ project.title }}</h3><span>{{ project.number }}</span></div><p>{{ project.description }}</p><div class="project-bottom"><div class="tags"><span v-for="tag in project.stack" :key="tag">{{ tag }}</span></div><div class="project-links"><a href="https://github.com" target="_blank" :aria-label="`${project.title} on GitHub`"><Github :size="17" /></a><a href="#" :aria-label="`View ${project.title} demo`"><ArrowUpRight :size="18" /></a></div></div></div>
      </article>
    </div>
  </section>
</template>
