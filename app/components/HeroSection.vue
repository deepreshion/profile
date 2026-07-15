<script setup lang="ts">
import { ArrowDownRight, Mail, Sparkles } from 'lucide-vue-next'
const portraitSrc = `${useRuntimeConfig().app.baseURL}images/ruslan-portrait.png`
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="hero-copy">
      <div class="eyebrow" data-hero-item><span class="status-dot" />Available for select projects</div>
      <h1 id="hero-title" data-hero-item>Ruslan<br><span>Vorontsov</span></h1>
      <p class="hero-role" data-hero-item>Senior Frontend Engineer</p>
      <div class="tech-line" data-hero-item>Vue.js <i /> Nuxt <i /> TypeScript</div>
      <p class="hero-lede" data-hero-item>Building scalable web applications with thoughtful architecture and an uncompromising eye for detail.</p>
      <div class="hero-actions" data-hero-item>
        <a class="button button-primary" href="#projects" data-magnetic>View projects <ArrowDownRight :size="18" /></a>
        <a class="button button-secondary" href="mailto:hello@ruslan.dev" data-magnetic>Contact me <Mail :size="17" /></a>
      </div>
    </div>

    <div class="hero-visual" data-hero-visual>
      <img :src="portraitSrc" width="1024" height="1280" alt="Black and white portrait of Ruslan Vorontsov" fetchpriority="high">
      <div class="portrait-label"><Sparkles :size="15" /> Based in Europe · Working globally</div>
      <span class="visual-index">/ 01</span>
    </div>
  </section>
</template>
