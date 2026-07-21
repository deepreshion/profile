<script setup lang="ts">
import { Check } from "lucide-vue-next";

const { experience, workCases } = usePortfolio();
const content = usePortfolioContent();
</script>

<template>
  <section
    id="experience"
    class="experience section-pad"
    aria-labelledby="experience-title"
  >
    <div class="section-header" data-reveal>
      <div>
        <div class="section-kicker">
          {{ content.sections.experienceKicker }}
        </div>
        <h2 id="experience-title">
          {{ content.sections.experienceTitle }}
        </h2>
      </div>
      <!--      <p>-->
      <!--        {{ content.sections.experienceText }}-->
      <!--      </p>-->
    </div>
    <div class="experience-layout">
      <div class="timeline">
        <article v-for="job in experience" :key="job.company" data-reveal>
          <div class="timeline-dot" />
          <time>
            {{ job.years }}
          </time>
          <div>
            <h3>
              {{ job.role }}
            </h3>
            <h4>
              {{ job.company }}
            </h4>
            <ul>
              <li v-for="item in job.achievements" :key="item">
                <Check :size="14" />
                {{ item }}
              </li>
            </ul>
          </div>
        </article>
      </div>
      <aside
        id="skills"
        class="stats-panel"
        :aria-label="content.profile.skillsTitle"
        data-reveal
      >
        <div class="stats-head">
          <span>
            {{ content.profile.skillsTitle }}
          </span>
        </div>
        <div class="work-case-list">
          <article
            v-for="item in workCases"
            :key="item.title"
            class="work-case"
          >
            <Check :size="14" />
            <div>
              <h3>
                {{ item.title }}
              </h3>
              <p>
                {{ item.text }}
              </p>
            </div>
          </article>
        </div>
      </aside>
    </div>
  </section>
</template>
