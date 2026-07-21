<script setup lang="ts">
import { ArrowDownToLine, Menu, X } from "lucide-vue-next";

const open = ref(false);
const { locale, locales, setLocale } = useLocale();
const content = usePortfolioContent();
const baseURL = useRuntimeConfig().app.baseURL;
const switchLocalePath = useSwitchLocalePath();
const cvHref = computed(
  () => `${baseURL}ruslan-vorontsov-cv-${locale.value}.pdf`,
);
</script>

<template>
  <header class="site-header">
    <a
      class="monogram"
      href="#top"
      :aria-label="content.header.backToTop"
      data-header-item
    ><AppLogo /></a>
    <nav :class="{ open }" :aria-label="content.header.navigationLabel">
      <a
        v-for="link in content.header.links"
        :key="link.href"
        :href="link.href"
        data-header-item
        @click="open = false"
      >{{ link.label }}</a>
    </nav>
    <div class="header-actions">
      <a
        class="cv-link"
        :href="cvHref"
        download
        data-header-item
        data-magnetic
      ><ArrowDownToLine :size="16" /> {{ content.header.downloadCv }}</a>
      <div
        class="language-switch"
        :aria-label="content.header.languageLabel"
        data-header-item
      >
        <NuxtLink
          v-for="item in locales"
          :key="item"
          :to="switchLocalePath(item)"
          :class="{ active: locale === item }"
          :aria-pressed="locale === item"
          @click="setLocale(item)"
        >
          {{ item.toUpperCase() }}
        </NuxtLink>
      </div>
    </div>
    <button
      class="menu-button"
      :aria-expanded="open"
      :aria-label="content.header.menuLabel"
      @click="open = !open"
    >
      <X v-if="open" /><Menu v-else />
    </button>
  </header>
</template>
