<script setup lang="ts">
import { Braces, UserRound, Box } from 'lucide-vue-next'
const { skills, technologies, details } = usePortfolio()
</script>

<template>
  <section id="about" class="profile-grid section-pad" aria-label="Profile overview">
    <article class="panel about-card reveal" data-reveal>
      <div class="panel-heading"><UserRound :size="18" /><span>About me</span><b>01</b></div>
      <p class="about-intro">I turn ambitious product ideas into fast, elegant digital experiences.</p>
      <p class="muted">My work sits at the intersection of engineering, product thinking, and interface craft. I care about the tiny details — and the systems that make them repeatable.</p>
      <dl class="detail-list">
        <div v-for="detail in details" :key="detail.label"><dt><component :is="detail.icon" :size="16" />{{ detail.label }}</dt><dd>{{ detail.value }}</dd></div>
      </dl>
    </article>

    <article id="skills" class="panel skills-card reveal" data-reveal>
      <div class="panel-heading"><Braces :size="18" /><span>Skills</span><b>02</b></div>
      <div class="skill-list">
        <div v-for="([name, value], i) in skills" :key="name" class="skill-row">
          <span>{{ name }}</span><div class="skill-track"><i :data-progress="value" /></div><b>{{ value }}</b>
        </div>
      </div>
    </article>

    <article class="panel tech-card reveal" data-reveal>
      <div class="panel-heading"><Box :size="18" /><span>Technologies</span><b>03</b></div>
      <div class="tech-grid">
        <div v-for="(tech, index) in technologies" :key="tech" class="tech-item" data-tech-item><span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ tech }}</strong></div>
      </div>
    </article>
  </section>
</template>
