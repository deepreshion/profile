<script setup lang="ts">
import { Check } from 'lucide-vue-next'
const { experience, stats } = usePortfolio()
</script>

<template>
  <section id="experience" class="experience section-pad" aria-labelledby="experience-title">
    <div class="section-header" data-reveal><div><div class="section-kicker">Experience</div><h2 id="experience-title">Built over time.</h2></div><p>Hands-on product engineering combined with technical direction and a bias toward simple solutions.</p></div>
    <div class="experience-layout">
      <div class="timeline">
        <article v-for="(job, i) in experience" :key="job.company" data-reveal>
          <div class="timeline-dot" /><time>{{ job.years }}</time><div><h3>{{ job.role }}</h3><h4>{{ job.company }}</h4><ul><li v-for="item in job.achievements" :key="item"><Check :size="14" />{{ item }}</li></ul></div>
        </article>
      </div>
      <aside class="stats-panel" aria-label="Engineering stats" data-reveal>
        <div class="stats-head"><span>Core stats</span><b>LVL 08</b></div>
        <div v-for="([label, value], i) in stats" :key="label" class="stat-row"><div><span>{{ label }}</span><b>{{ value }}</b></div><div class="stat-track"><i :data-progress="value" /></div></div>
      </aside>
    </div>
  </section>
</template>
