<script setup lang="ts">
import { ArrowUpRight, Github, Linkedin, Send, Mail } from "lucide-vue-next";

const content = usePortfolioContent();
const socials = [
  { label: "GitHub", href: "https://github.com/deepreshion", icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/deepreshion",
    icon: Linkedin,
  },
  { label: "Telegram", href: "https://t.me/deepreshion", icon: Send },
  { label: "Email", href: "mailto:deepreshion@gmail.com", icon: Mail },
];
</script>

<template>
  <footer id="contact" class="footer section-pad">
    <div class="footer-cta" data-reveal>
      <div class="section-kicker">
        {{ content.footer.kicker }}
      </div>
      <h2>
        {{ content.footer.titleLine }}<br /><span>
          {{ content.footer.titleAccent }}
        </span>
      </h2>
      <a
        class="button button-primary"
        href="https://t.me/deepreshion"
        target="_blank"
        data-magnetic
      >
        {{ content.footer.cta }} <ArrowUpRight :size="18" />
      </a>
    </div>
    <div class="footer-bottom">
      <a class="monogram" href="#top" :aria-label="content.header.backToTop">
        <AppLogo />
      </a>
      <div class="socials">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
        ><component :is="social.icon" :size="17" />{{ social.label }}</a>
      </div>
      <p>
        © {{ new Date().getFullYear() }} {{ content.footer.copyright }}
      </p>
    </div>
  </footer>
</template>
