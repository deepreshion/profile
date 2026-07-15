<script setup lang="ts">
import { ArrowDownToLine, Menu, X } from 'lucide-vue-next'
const open = ref(false)
const links = ['About', 'Skills', 'Projects', 'Experience']
const cvHref = `${useRuntimeConfig().app.baseURL}ruslan-vorontsov-cv.txt`
</script>

<template>
  <header class="site-header">
    <a class="monogram" href="#top" aria-label="Back to top" data-header-item>RV<span>.</span></a>
    <nav :class="{ open }" aria-label="Main navigation">
      <a v-for="link in links" :key="link" :href="`#${link.toLowerCase()}`" data-header-item @click="open = false">{{ link }}</a>
      <a href="#contact" data-header-item @click="open = false">Contact</a>
    </nav>
    <a class="cv-link" :href="cvHref" download data-header-item data-magnetic><ArrowDownToLine :size="16" /> Download CV</a>
    <button class="menu-button" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open">
      <X v-if="open" /><Menu v-else />
    </button>
  </header>
</template>
