<script setup lang="ts">
const { capabilities } = usePortfolio()
</script>

<template>
  <section class="capabilities section-pad" aria-labelledby="capabilities-title">
    <div class="section-kicker" data-reveal>What I bring</div>
    <h2 id="capabilities-title" class="sr-only">Capabilities</h2>
    <div class="capability-grid">
      <article v-for="(item, i) in capabilities" :key="item.title" data-reveal>
        <component :is="item.icon" :size="22" /><span>0{{ i + 1 }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>
