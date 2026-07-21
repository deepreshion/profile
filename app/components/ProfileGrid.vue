<script setup lang="ts">
import { ChartBar, UserRound, Box } from "lucide-vue-next";

const { stats, statSummary, technologies, details } = usePortfolio();
const content = usePortfolioContent();

const techLogoMap: Record<string, { src: string; color: string }> = {
  "Vue.js": {
    color: "#41b883",
    src: "https://api.iconify.design/logos/vue.svg",
  },
  Nuxt: {
    color: "#00dc82",
    src: "https://api.iconify.design/logos/nuxt-icon.svg",
  },
  TypeScript: {
    color: "#3178c6",
    src: "https://api.iconify.design/logos/typescript-icon.svg",
  },
  JavaScript: {
    color: "#f7df1e",
    src: "https://api.iconify.design/logos/javascript.svg",
  },
  HTML: {
    color: "#e34f26",
    src: "https://api.iconify.design/logos/html-5.svg",
  },
  CSS: {
    color: "#1572b6",
    src: "https://api.iconify.design/logos/css-3.svg",
  },
  Vite: {
    color: "#bd34fe",
    src: "https://api.iconify.design/logos/vitejs.svg",
  },
  Pinia: {
    color: "#ffd859",
    src: "https://api.iconify.design/logos/pinia.svg",
  },
  Quasar: {
    color: "#1976d2",
    src: "https://cdn.quasar.dev/logo-v2/svg/logo.svg",
  },
  DevExtreme: {
    color: "#ff7200",
    src: "https://api.iconify.design/simple-icons/devexpress.svg?color=%23ff7200",
  },
  Vitest: {
    color: "#6e9f18",
    src: "https://api.iconify.design/logos/vitest.svg",
  },
  Cypress: {
    color: "#69d3a7",
    src: "https://api.iconify.design/logos/cypress-icon.svg",
  },
};

const techItems = computed(() =>
  technologies.map((name) => ({
    name,
    logo: techLogoMap[name] ?? {
      color: "#b7d84b",
      src: "https://api.iconify.design/lucide/box.svg?color=%23b7d84b",
    },
  })),
);
</script>

<template>
  <section
    id="about"
    class="profile-grid section-pad"
    :aria-label="content.profile.ariaLabel"
  >
    <article class="panel about-card reveal" data-reveal>
      <div class="panel-heading">
        <UserRound :size="18" />
        <span>
          {{ content.profile.aboutTitle }}
        </span>
        <b> 01 </b>
      </div>
      <p class="about-intro">
        {{ content.profile.aboutIntro }}
      </p>
      <p class="muted">
        {{ content.profile.aboutText }}
      </p>
      <dl class="detail-list">
        <div v-for="detail in details" :key="detail.label">
          <dt>
            <component :is="detail.icon" :size="16" />
            {{ detail.label }}
          </dt>
          <dd>
            {{ detail.value }}
          </dd>
        </div>
      </dl>
    </article>

    <article
      class="panel stats-card reveal"
      :aria-label="statSummary.ariaLabel"
      data-reveal
    >
      <div class="panel-heading">
        <ChartBar :size="18" />
        <span>
          {{ statSummary.heading }}
        </span>
        <b> 02 </b>
      </div>
      <div class="stats-list">
        <div v-for="[label, value] in stats" :key="label" class="stat-row">
          <div>
            <span>
              {{ label }}
            </span>
            <b>
              {{ value }}
            </b>
          </div>
          <div class="stat-track">
            <i :data-progress="value" />
          </div>
        </div>
      </div>
    </article>

    <article class="panel tech-card reveal" data-reveal>
      <div class="panel-heading">
        <Box :size="18" />
        <span>
          {{ content.profile.technologiesTitle }}
        </span>
        <b> 03 </b>
      </div>
      <div class="tech-grid">
        <div
          v-for="(tech, index) in techItems"
          :key="tech.name"
          class="tech-item"
          data-tech-item
        >
          <span class="tech-index">
            {{ String(index + 1).padStart(2, "0") }}
          </span>
          <span
            class="tech-icon"
            :style="{ '--tech-color': tech.logo.color }"
            aria-hidden="true"
          >
            <img
              :src="tech.logo.src"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </span>
          <strong>
            {{ tech.name }}
          </strong>
        </div>
      </div>
    </article>
  </section>
</template>
