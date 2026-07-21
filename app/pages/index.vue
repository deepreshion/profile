<script setup lang="ts">
const { locale } = useLocale();
const content = usePortfolioContent();
const canonicalUrl = computed(() =>
  absoluteUrl(portfolioPagePaths[locale.value as keyof typeof portfolioPagePaths]),
);

useSeoMeta({
  title: () => content.value.seo.title,
  description: () => content.value.seo.description,
  ogTitle: () => content.value.seo.title,
  ogDescription: () => content.value.seo.description,
  ogType: "profile",
  ogUrl: () => canonicalUrl.value,
  ogSiteName: siteName,
  ogImage: seoImageUrl,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: "image/png",
  twitterCard: "summary_large_image",
  twitterTitle: () => content.value.seo.title,
  twitterDescription: () => content.value.seo.description,
  twitterImage: seoImageUrl,
});

useHead({
  htmlAttrs: {
    lang: () => locale.value,
  },
  link: () => [
    { rel: "canonical", href: canonicalUrl.value },
    ...localeAlternates(portfolioPagePaths),
  ],
  script: () => [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        name: content.value.seo.title,
        description: content.value.seo.description,
        url: canonicalUrl.value,
        image: seoImageUrl,
        inLanguage: locale.value,
        mainEntity: {
          "@type": "Person",
          name: "Ruslan Vorontsov",
          alternateName: "Руслан Воронцов",
          jobTitle: "Senior Frontend Engineer",
          url: absoluteUrl("/"),
          image: `${absoluteUrl("/")}images/my-portrait.png`,
          sameAs: [
            "https://github.com/deepreshion",
            "https://linkedin.com/in/deepreshion",
            "https://t.me/deepreshion",
          ],
          knowsAbout: [
            "Vue.js",
            "Nuxt",
            "TypeScript",
            "Frontend Architecture",
            "Test Automation",
            "AI-assisted engineering",
          ],
        },
      }),
    },
  ],
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
