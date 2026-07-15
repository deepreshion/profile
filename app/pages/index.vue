<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL

useSeoMeta({
  title: 'Ruslan Vorontsov — Senior Frontend Engineer',
  description: 'Senior Frontend Engineer focused on Vue, Nuxt, TypeScript, architecture and performance.',
  ogImage: `${baseURL}images/ruslan-portrait.png`
})

useAnimePortfolio()
</script>

<template>
  <div class="page-shell">
    <PageBackground />
    <div class="scroll-progress" aria-hidden="true"><i data-scroll-progress /></div>
    <AppHeader />
    <main>
      <HeroSection />
      <ProfileGrid />
      <CapabilitiesStrip />
      <ProjectsSection />
      <ExperienceSection />
    </main>
    <AppFooter />
  </div>
</template>
