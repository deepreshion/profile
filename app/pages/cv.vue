<script setup lang="ts">
import type { Locale } from '~/composables/useLocale'
import { cvMessages, type CvLocale } from '~/i18n/cv'

const route = useRoute()
const { locale, setLocale } = useLocale()
const baseURL = useRuntimeConfig().app.baseURL
const cv = computed(() => cvMessages[locale.value as CvLocale])
const primaryProject = computed(() => cv.value.projects[0])
const secondaryProjects = computed(() => cv.value.projects.slice(1, 3))

const queryLocale = route.query.locale === 'ru' || route.query.locale === 'en'
  ? route.query.locale
  : null

if (queryLocale && locale.value !== queryLocale) {
  await setLocale(queryLocale as Locale)
}

useHead({
  htmlAttrs: {
    lang: () => locale.value
  },
  title: () => cv.value.title
})
</script>

<template>
  <main id="cv-print-root" class="cv-template" :data-locale="locale">
    <section class="page">
      <div class="kicker">{{ cv.resume }}</div>
      <div class="hero">
        <div>
          <div class="photo-card">
            <img class="photo" :src="`${baseURL}images/cv-photo.png`" :alt="cv.portraitAlt">
          </div>
          <div class="contact">
            <div><b>Email</b><a href="mailto:deepreshion@gmail.com">deepreshion@gmail.com</a></div>
            <div><b>GitHub</b><a href="https://github.com/deepreshion">github.com/deepreshion</a></div>
            <div><b>LinkedIn</b><a href="https://linkedin.com/in/deepreshion">linkedin.com/in/deepreshion</a></div>
            <div><b>{{ cv.format }}</b>{{ cv.formatValue }}</div>
          </div>
        </div>
        <div>
          <h1>{{ cv.name.first }}<br>{{ cv.name.last }}</h1>
          <div class="sub">{{ cv.role }}</div>
          <div class="profile body">{{ cv.summary }}</div>
          <div class="metrics">
            <div v-for="metric in cv.metrics" :key="metric.value" class="metric"><strong>{{ metric.value }}</strong><span>{{ metric.label }}</span></div>
          </div>
        </div>
      </div>

      <div class="section achievements-section">
        <div class="section-title"><h2>{{ cv.achievementsTitle }}</h2></div>
        <div class="achievements">
          <div
            v-for="(achievement, index) in cv.achievements"
            :key="achievement"
            class="achievement"
            :class="{ 'achievement-wide': index === cv.achievements.length - 1 }"
          >
            {{ achievement }}
          </div>
        </div>
      </div>

      <div class="section stack-section">
        <div class="section-title"><h2>{{ cv.stackTitle }}</h2></div>
        <div class="tags">
          <span
            v-for="(technology, index) in cv.technologies"
            :key="technology"
            class="tag"
            :class="{ primary: index < 4 }"
          >
            {{ technology }}
          </span>
        </div>
      </div>
      <div class="page-no">01</div>
    </section>

    <section class="page">
      <div class="kicker">{{ cv.professionalExperience }}</div>
      <div class="section-title" style="margin-top:7mm"><h2>{{ cv.workExperience }}</h2></div>
      <div class="timeline">
        <article v-for="job in cv.experience" :key="`${job.company}-${job.years}`" class="job">
          <div class="job-head">
            <div>
              <h3>{{ job.role }}</h3>
              <div class="company">{{ job.company }}</div>
            </div>
            <div class="date">{{ job.years }}</div>
          </div>
          <p class="body">{{ job.summary }}</p>
          <ul>
            <li v-for="achievement in job.achievements" :key="achievement">{{ achievement }}</li>
          </ul>
          <div class="techline"><b>{{ cv.stackLabel }}:</b> {{ job.stack }}</div>
        </article>
      </div>

      <div class="section">
        <div class="section-title"><h2>{{ cv.educationLanguages }}</h2></div>
        <div class="grid2">
          <div class="info-list">
            <div class="info-row">
              <div class="label">{{ cv.education }}</div>
              <div class="value"><b>{{ cv.educationName }}</b><br><span class="muted">{{ cv.educationDetails }}</span></div>
            </div>
            <div class="info-row">
              <div class="label">{{ cv.workFormat }}</div>
              <div class="value">{{ cv.workFormatValue }}</div>
            </div>
          </div>
          <div class="info-list">
            <div class="info-row"><div class="label">{{ cv.russian }}</div><div class="value">{{ cv.russianLevel }}</div></div>
            <div class="info-row"><div class="label">{{ cv.english }}</div><div class="value">{{ cv.englishLevel }}</div></div>
          </div>
        </div>
      </div>

      <div class="page-no">02</div>
    </section>

    <section class="page">
      <div class="kicker">{{ cv.selectedProjects }}</div>
      <div class="section-title" style="margin-top:7mm"><h2>{{ cv.selectedProjects }}</h2></div>

      <div v-if="primaryProject" class="project featured">
        <h3>{{ primaryProject.title }}</h3>
        <div class="role">{{ primaryProject.role }}</div>
        <p class="body">{{ primaryProject.description }}</p>
        <div class="flow">
          <span>PHP metadata</span><i>→</i><span>JSON schema</span><i>→</i><span>Dynamic Vue components</span><i>→</i><span>Validation</span><i>→</i><span>Ready UI</span>
        </div>
        <div class="techline"><b>{{ cv.responsibility }}:</b> {{ cv.responsibilityValue }}</div>
      </div>

      <div class="two-col-projects">
        <div v-for="project in secondaryProjects" :key="project.number" class="project">
          <h3>{{ project.title }}</h3>
          <div class="role">{{ project.role }}</div>
          <p class="small muted">{{ project.description }}</p>
          <div class="techline"><b>{{ cv.stackLabel }}:</b> {{ project.stack.join(', ') }}</div>
          <div v-if="project.github" class="techline"><b>GitHub:</b> {{ project.github }}</div>
        </div>
      </div>

      <div class="note">{{ cv.note }}</div>
      <div class="page-no">03</div>
    </section>
  </main>
</template>

<style>
:root{--surface:#171717;--surface-2:#1f1f1f;--accent:#b7d84b;--accent-2:#8faf39;--text:#f5f5f5;--muted:#a4a4a4;--line:#303030}
*{box-sizing:border-box}
html:has(.cv-template),body:has(.cv-template){margin:0;background:#101010;color:var(--text);font-family:Inter,Arial,sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}
@page{size:A4;margin:0}
.page{width:210mm;height:297mm;background:var(--surface);position:relative;overflow:hidden;padding:17mm 17mm 14mm;page-break-after:always}
.page:last-child{page-break-after:auto}
.page:before{content:"";position:absolute;width:76mm;height:76mm;border:1px solid #323232;right:-38mm;top:-38mm;transform:rotate(45deg)}
.page:after{content:"";position:absolute;width:18mm;height:18mm;background:var(--accent);right:16mm;top:0;opacity:.95}
.kicker{color:var(--accent);font-size:10px;letter-spacing:.22em;text-transform:uppercase;font-weight:600}
.cv-template h1,.cv-template h2,.cv-template h3,.cv-template p{margin:0}
.cv-template h1{font-size:35px;line-height:1.02;letter-spacing:0;font-weight:800}
.cv-template h2{font-size:22px;letter-spacing:0;margin-bottom:7mm;font-weight:800}
.cv-template h3{font-size:13.5px;line-height:1.25}
.sub{font-size:16px;color:var(--accent);font-weight:600;margin-top:3mm}
.muted{color:var(--muted)}
.small{font-size:9.4px;line-height:1.55}
.body{font-size:10.2px;line-height:1.58;color:#dedede}
.hero{display:grid;grid-template-columns:61mm 1fr;gap:12mm;align-items:center;margin-top:8mm}
.photo-card{background:var(--surface-2);padding:5mm;position:relative}
.photo{width:51mm;height:67mm;object-fit:cover;object-position:center top;filter:grayscale(100%);display:block}
.photo-card:after{content:"";position:absolute;left:0;bottom:0;width:6mm;height:25mm;background:var(--accent)}
.contact{display:grid;gap:3mm;margin-top:7mm;font-size:9.5px;color:#d3d3d3}
.contact a{color:#d3d3d3;text-decoration:none}
.contact b{color:var(--accent);display:inline-block;width:17mm;font-weight:600}
.profile{margin-top:8mm;max-width:105mm}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:3mm;margin-top:8mm}
.metric{background:var(--surface-2);border:1px solid #2a2a2a;padding:4mm;min-height:24mm}
.metric strong{display:block;color:var(--accent);font-size:21px;line-height:1}
.metric span{font-size:8.5px;color:var(--muted);line-height:1.3;display:block;margin-top:2mm}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:8mm}
.section{margin-top:10mm;position:relative;z-index:1}
.section-title{display:flex;align-items:center;margin-bottom:5mm}
.section-title h2{margin:0}
.achievements{display:grid;grid-template-columns:1fr 1fr;gap:2.2mm}
.achievement{background:var(--surface-2);border-left:2px solid var(--accent);padding:3.1mm 3.5mm;font-size:8.15px;line-height:1.38;color:#ddd}
.tags{display:flex;flex-wrap:wrap;gap:2mm}
.tag{display:inline-flex;align-items:center;justify-content:center;border:1px solid #444;background:transparent;border-radius:99px;padding:2mm 3.5mm;font-size:8.5px;color:#e7e7e7;box-shadow:none;outline:none}
.tag.primary{border-color:var(--accent);color:var(--accent);background:transparent}
.page-no{position:absolute;right:17mm;bottom:8mm;color:#666;font-size:8px;letter-spacing:.2em}
.timeline{position:relative;margin-left:3mm}
.timeline:before{content:"";position:absolute;left:1.6mm;top:2mm;bottom:2mm;width:1px;background:#393939}
.job{position:relative;padding-left:10mm;margin-bottom:10mm}
.job:before{content:"";position:absolute;left:0;top:1.5mm;width:3.4mm;height:3.4mm;background:var(--accent);border-radius:50%;box-shadow:0 0 0 2mm var(--surface)}
.job-head{display:flex;justify-content:space-between;gap:8mm;align-items:flex-start;margin-bottom:3mm}
.company{font-size:9px;color:var(--accent);font-weight:600;text-transform:uppercase;letter-spacing:.09em;margin-top:1mm}
.date{font-size:8.5px;color:var(--muted);white-space:nowrap}
.cv-template ul{margin:3mm 0 0;padding-left:4.5mm}
.cv-template li{font-size:9.4px;line-height:1.48;color:#d8d8d8;margin-bottom:2.1mm}
.techline{font-size:8.5px;color:var(--muted);margin-top:3mm}
.techline b{color:#ddd}
.project{background:var(--surface-2);border:1px solid #2c2c2c;padding:5mm;margin-bottom:4mm;position:relative}
.project.featured{border-top:2px solid var(--accent)}
.project .role{font-size:8.5px;color:var(--accent);font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin:1.5mm 0 3mm}
.flow{display:flex;align-items:center;gap:2mm;margin-top:4mm;flex-wrap:wrap}
.flow span{font-size:7.8px;background:#171717;border:1px solid #343434;padding:1.7mm 2.2mm;border-radius:2px}
.flow i{font-style:normal;color:var(--accent)}
.two-col-projects{display:grid;grid-template-columns:1.15fr .85fr;gap:5mm}
.info-list{display:grid;gap:4mm}
.info-row{border-bottom:1px solid var(--line);padding-bottom:4mm}
.info-row .label{font-size:8px;color:var(--accent);text-transform:uppercase;letter-spacing:.12em;margin-bottom:1.5mm}
.info-row .value{font-size:10px;color:#e5e5e5;line-height:1.45}
.note{font-size:8px;line-height:1.45;color:#777;margin-top:5mm}
.achievement-wide{grid-column:1/-1}
.achievements-section{margin-top:7mm}
.stack-section{margin-top:7mm}
@media screen{.page{margin:0 auto}}

.cv-template .hero{min-height:initial;display:grid;grid-template-columns:61mm 1fr;gap:12mm;align-items:center;margin-top:8mm;border-bottom:0;position:relative}
.cv-template .hero h1{font-size:35px;line-height:1.02;letter-spacing:0;font-weight:800}
.cv-template .profile{margin-top:8mm;max-width:105mm}
.cv-template .tags{display:flex;flex-wrap:wrap;gap:2mm}
.cv-template .tags span{border:1px solid #444;background:transparent;border-radius:99px;padding:2mm 3.5mm;font:inherit;font-size:8.5px;color:#e7e7e7}
.cv-template .tag.primary{border-color:var(--accent);color:var(--accent);background:transparent}
.cv-template .timeline{position:relative;margin-left:3mm}
.cv-template .timeline article{display:block;grid-template-columns:none;gap:0;position:relative;padding-bottom:0}
.cv-template .timeline ul{list-style:disc;margin:3mm 0 0;padding-left:4.5mm;display:block}
.cv-template .timeline li{display:list-item;align-items:initial;gap:0;color:#d8d8d8;font-size:9.4px;line-height:1.48;margin-bottom:2.1mm}
.cv-template .project p{max-width:none;min-height:0}
</style>
