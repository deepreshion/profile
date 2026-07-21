<script setup lang="ts">
import { Check } from "lucide-vue-next";

const { experience, workCases } = usePortfolio();
const content = usePortfolioContent();

const hasRoleBreakdown = (
  job: (typeof experience.value)[number],
): job is (typeof experience.value)[number] & {
  roles: Array<{ years: string; role: string; achievements: readonly string[] }>;
} => "roles" in job;
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
            <div v-if="hasRoleBreakdown(job)" class="role-breakdown">
              <section
                v-for="role in job.roles"
                :key="`${job.company}-${role.years}-${role.role}`"
                class="role-breakdown-item"
              >
                <div class="role-breakdown-head">
                  <h5>
                    {{ role.role }}
                  </h5>
                  <time>
                    {{ role.years }}
                  </time>
                </div>
                <ul>
                  <li v-for="item in role.achievements" :key="item">
                    <Check :size="14" />
                    {{ item }}
                  </li>
                </ul>
              </section>
            </div>
            <ul v-else>
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
