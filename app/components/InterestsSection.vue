<script setup lang="ts">
const { interests } = usePortfolio();
</script>

<template>
  <section
    id="interests"
    class="interests section-pad"
    aria-labelledby="interests-title"
  >
    <div class="interests-copy" data-reveal>
      <div class="section-kicker">
        {{ interests.kicker }}
      </div>
      <h2 id="interests-title">
        {{ interests.title }}
      </h2>
      <p>
        {{ interests.text }}
      </p>
    </div>

    <div class="interest-grid">
      <article
        v-for="(item, i) in interests.items"
        :key="i"
        class="interest-card"
        data-reveal
      >
        <div class="interest-card-head">
          <component :is="item.icon" :size="20" />
          <span>
            {{ String(i + 1).padStart(2, "0") }}
          </span>
        </div>
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
