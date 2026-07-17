<script setup lang="ts">
import { ArrowDownRight, Mail, Sparkles } from 'lucide-vue-next'

const portraitSrc = `${useRuntimeConfig().app.baseURL}images/my-portrait.png`
const content = usePortfolioContent()
</script>

<template>
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="hero-copy">
      <div class="eyebrow" data-hero-item><span class="status-dot" />{{ content.hero.eyebrow }}</div>
      <h1 id="hero-title" data-hero-item>{{ content.hero.firstName }}<br><span>{{ content.hero.lastName }}</span></h1>
      <p class="hero-role" data-hero-item>{{ content.hero.role }}</p>
      <div class="tech-line" data-hero-item><template v-for="(tech, index) in content.hero.techLine" :key="tech">{{ tech }}<i v-if="index < content.hero.techLine.length - 1" /></template></div>
      <p class="hero-lede" data-hero-item>{{ content.hero.lede }}</p>
      <div class="hero-actions" data-hero-item>
        <a class="button button-primary" href="#projects" data-magnetic>{{ content.hero.projectsCta }} <ArrowDownRight :size="18" /></a>
        <a class="button button-secondary" href="mailto:deepreshion@gmail.com" data-magnetic>{{ content.hero.contactCta }} <Mail :size="17" /></a>
      </div>
    </div>

    <div class="hero-visual" data-hero-visual>
      <div class="hero-photo" :style="{ '--portrait-mask': `url('${portraitSrc}')` }">
        <img :src="portraitSrc" width="1024" height="1280" :alt="content.hero.portraitAlt" fetchpriority="high">
      </div>
      <div class="portrait-label"><Sparkles :size="15" /> {{ content.hero.portraitLabel }}</div>
    </div>
  </section>
</template>
