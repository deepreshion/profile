<script setup lang="ts">
import { ArrowUpRight, Github, Linkedin, Send, Mail } from 'lucide-vue-next'
const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Telegram', href: 'https://t.me', icon: Send },
  { label: 'Email', href: 'mailto:hello@ruslan.dev', icon: Mail }
]
</script>

<template>
  <footer id="contact" class="footer section-pad">
    <div class="footer-cta" data-reveal><div class="section-kicker">Have a project in mind?</div><h2>Let’s build something<br><span>worth remembering.</span></h2><a class="button button-primary" href="mailto:hello@ruslan.dev" data-magnetic>Start a conversation <ArrowUpRight :size="18" /></a></div>
    <div class="footer-bottom"><a class="monogram" href="#top">RV<span>.</span></a><div class="socials"><a v-for="social in socials" :key="social.label" :href="social.href" target="_blank"><component :is="social.icon" :size="17" />{{ social.label }}</a></div><p>© {{ new Date().getFullYear() }} Ruslan Vorontsov</p></div>
  </footer>
</template>
