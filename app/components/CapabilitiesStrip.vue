<script setup lang="ts">
const { capabilities } = usePortfolio();
const content = usePortfolioContent();
</script>

<template>
  <section
    class="capabilities section-pad"
    aria-labelledby="capabilities-title"
  >
    <div class="section-kicker" data-reveal>
      {{ content.sections.capabilitiesKicker }}
    </div>
    <h2 id="capabilities-title" class="sr-only">
      {{ content.sections.capabilitiesTitle }}
    </h2>
    <div class="capability-grid">
      <article v-for="(item, i) in capabilities" :key="i" data-reveal>
        <component :is="item.icon" :size="22" />
        <span> 0{{ i + 1 }} </span>
        <h3>
          {{ item.title }}
        </h3>
        <p>
          {{ item.text }}
        </p>
      </article>
    </div>
  </section>
</template>
