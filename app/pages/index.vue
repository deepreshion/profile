<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL;
const { locale } = useLocale();
const content = usePortfolioContent();

useSeoMeta({
  title: () => content.value.seo.title,
  description: () => content.value.seo.description,
  ogTitle: () => content.value.seo.title,
  ogDescription: () => content.value.seo.description,
  ogImage: `${baseURL}images/my-portrait.png`,
});

useHead({
  htmlAttrs: {
    lang: () => locale.value,
  },
});

useAnimePortfolio();
</script>

<template>
  <div class="page-shell">
    <PageBackground />
    <div class="scroll-progress" aria-hidden="true">
      <i data-scroll-progress />
    </div>
    <AppHeader />
    <main>
      <HeroSection />
      <ProfileGrid />
      <CapabilitiesStrip />
      <ProjectsSection />
      <ExperienceSection />
      <InterestsSection />
    </main>
    <AppFooter />
  </div>
</template>
