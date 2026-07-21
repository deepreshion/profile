export type CvLocale = 'en' | 'ru'

export const cvMessages = {
  en: {
    title: 'Ruslan Vorontsov - CV',
    resume: 'CV  · 2026',
    name: {
      first: 'Ruslan',
      last: 'Vorontsov'
    },
    role: 'Senior Frontend Engineer',
    portraitAlt: 'Black and white portrait of Ruslan Vorontsov',
    format: 'Format',
    formatValue: 'Remote · International team',
    summary: '6+ years building corporate web applications, CMS products and B2B platforms with Vue and TypeScript, focused on architecture, practical test automation and AI-assisted workflows. My commercial experience combines architecture decisions, migrations from legacy stacks, frontend regression protection, automation through AI agents and close work with analysts and QA.',
    metrics: [
      { value: '6+', label: 'years of commercial experience' },
      { value: '25+', label: 'commercial projects' },
      { value: '10+', label: 'projects as technical lead' },
      { value: 'Vue 3', label: 'main specialization' }
    ],
    achievementsTitle: 'Key achievements',
    achievements: [
      'Acted as technical lead on 10+ of 25+ projects, defining architecture and module decomposition.',
      'Vue, TypeScript, microfrontends and modular systems built for independent team delivery.',
      'Migration work across legacy projects from Webpack to Vite and from Vue 2 to Vue 3, improving local development and release confidence.',
      'Smoke and E2E test coverage that catches regressions before production releases.',
      'AI-assisted workflows and coding agents used for codebase analysis, refactoring support, test scaffolding, documentation and delivery checks.',
      'Introduced microfrontend architecture, E2E testing with Cypress and common code standards.',
      'Architecture decisions, code standards and close collaboration with analysts and QA.',
      'Hands-on Vue and TypeScript development, architecture decisions, migrations from legacy stacks, testing processes and close work with analysts and QA.'
    ],
    stackTitle: 'Technical stack',
    technologies: ['Vue.js 3', 'TypeScript', 'Nuxt', 'Vite', 'JavaScript', 'HTML', 'CSS', 'Pinia', 'Quasar', 'DevExtreme', 'Vitest', 'Cypress'],
    professionalExperience: 'Professional experience',
    workExperience: 'Work experience',
    stackLabel: 'Stack',
    experience: [
      {
        years: 'Mar 2020 - Present',
        company: 'Program Product',
        role: 'Senior Frontend Engineer',
        summary: 'Built corporate web applications, admin systems, CMS products and B2B platforms with Vue 3 and TypeScript.',
        achievements: [
          'Acted as technical lead on 10+ of 25+ projects, shaping architecture and module decomposition.',
          'Introduced microfrontend architecture, E2E testing with Cypress and common code standards.',
          'Used AI-assisted workflows and coding agents to automate codebase analysis, refactoring support, test scaffolding, documentation and delivery checks.'
        ],
        stack: 'Vue.js 3, TypeScript, JavaScript, Vite, Vue Router, Pinia, Vuex, Quasar, DevExtreme, Vitest, Cypress'
      },
      {
        years: 'Jan 2020 - Mar 2020',
        company: 'ALTED',
        role: 'Frontend Developer',
        summary: 'Worked on an Angular and DevExtreme web application as an early-career frontend engineer.',
        achievements: [
          'Redesigned existing user interfaces and improved UI behavior.',
          'Used Angular, TypeScript, CSS, Tailwind and DevExtreme.'
        ],
        stack: 'Angular, TypeScript, CSS, Tailwind, DevExtreme'
      }
    ],
    educationLanguages: 'Education and languages',
    education: 'Education',
    educationName: 'Tver Chemical-Technological College',
    educationDetails: 'Information Systems · 2020',
    workFormat: 'Work format',
    workFormatValue: 'Fully remote · international product or project team',
    russian: 'Russian',
    russianLevel: 'Native',
    english: 'English',
    englishLevel: 'A2 · improving conversational and professional level',
    selectedProjects: 'Selected projects',
    responsibility: 'Responsibility',
    responsibilityValue: 'UI architecture, Form Builder, dynamic field rendering, client-side validation, Vite library build, CI/CD',
    projects: [
      {
        number: '01',
        title: 'Code-first CMS',
        role: 'Senior Frontend Engineer',
        description: 'A Symfony-bundle CMS with metadata-driven admin sections, dynamic form rendering and Vite-based frontend delivery. New admin sections moved from days of custom frontend work to hours.',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Symfony']
      },
      {
        number: '02',
        title: 'OptiFit Workout Tracker',
        role: 'Telegram Mini App · Pet project',
        description: 'A self-built workout tracking app for strength training, cardio and activity logs, prepared for Telegram Mini Apps and a Capacitor mobile version.',
        stack: ['Vue 3', 'Quasar', 'Pinia', 'Telegram Mini Apps'],
        github: 'github.com/deepreshion'
      },
      {
        number: '03',
        title: 'City and Social Platforms',
        role: 'Senior Frontend Engineer',
        description: 'Infrastructure interfaces for Moscow city services with data-heavy dashboards, filters and tables focused on reliability, accessibility and broad public usage.',
        stack: ['Vue', 'TypeScript', 'Cypress', 'a11y']
      }
    ],
    note: 'Most commercial projects cannot be published because of confidentiality restrictions.'
  },
  ru: {
    title: 'Руслан Воронцов - CV',
    resume: 'Резюме · 2026',
    name: {
      first: 'Руслан',
      last: 'Воронцов'
    },
    role: 'Senior Frontend Engineer',
    portraitAlt: 'Черно-белый портрет Руслана Воронцова',
    format: 'Формат',
    formatValue: 'Удаленно · международная команда',
    summary: '6+ лет создаю корпоративные веб-приложения, CMS-продукты и B2B-платформы на Vue и TypeScript с фокусом на архитектуру, практичную автоматизацию тестирования и AI-assisted workflows. Мой коммерческий опыт объединяет архитектурные решения, миграции с легаси-стеков, защиту фронтенда от регрессии, автоматизацию через AI-агентов и плотную работу с аналитиками и QA.',
    metrics: [
      { value: '6+', label: 'лет коммерческого опыта' },
      { value: '25+', label: 'коммерческих проектов' },
      { value: '10+', label: 'проектов в роли техлида' },
      { value: 'Vue 3', label: 'основная специализация' }
    ],
    achievementsTitle: 'Ключевые достижения',
    achievements: [
      'Выступал техническим лидером на 10+ из 25+ проектов, определяя архитектуру и декомпозицию модулей.',
      'Vue, TypeScript, микрофронтенды и модульные системы для независимой работы команд.',
      'Миграции legacy-проектов с Webpack на Vite и с Vue 2 на Vue 3, улучшающие локальную разработку и надежность релизов.',
      'Smoke- и E2E-покрытие, которое ловит регрессии до production-релизов.',
      'AI-assisted workflows и coding agents для анализа кодовой базы, поддержки рефакторинга, подготовки тестов, документации и delivery-проверок.',
      'Внедрял микрофронтенд-архитектуру, E2E-тестирование на Cypress и общие стандарты кода.',
      'Архитектурные решения, стандарты кода и плотная работа с аналитиками и QA.',
      'Мой опыт объединяет практическую разработку на Vue и TypeScript, архитектурные решения, миграции с легаси-стеков, тестовые процессы и плотную работу с аналитиками и QA.'
    ],
    stackTitle: 'Технический стек',
    technologies: ['Vue.js 3', 'TypeScript', 'Nuxt', 'Vite', 'JavaScript', 'HTML', 'CSS', 'Pinia', 'Quasar', 'DevExtreme', 'Vitest', 'Cypress'],
    professionalExperience: 'Профессиональный опыт',
    workExperience: 'Опыт работы',
    stackLabel: 'Стек',
    experience: [
      {
        years: 'Март 2020 - сейчас',
        company: 'Program Product',
        role: 'Senior Frontend Engineer',
        summary: 'Разрабатывал корпоративные веб-приложения, админ-системы, CMS-продукты и B2B-платформы на Vue 3 и TypeScript.',
        achievements: [
          'Выступал техническим лидером на 10+ из 25+ проектов, определяя архитектуру и декомпозицию модулей.',
          'Внедрял микрофронтенд-архитектуру, E2E-тестирование на Cypress и общие стандарты кода.',
          'Использовал AI-assisted workflows и coding agents для автоматизации анализа кодовой базы, поддержки рефакторинга, подготовки тестов, документации и delivery-проверок.'
        ],
        stack: 'Vue.js 3, TypeScript, JavaScript, Vite, Vue Router, Pinia, Vuex, Quasar, DevExtreme, Vitest, Cypress'
      },
      {
        years: 'Январь 2020 - март 2020',
        company: 'ALTED',
        role: 'Frontend Developer',
        summary: 'Работал над веб-приложением на Angular и DevExtreme на старте фронтенд-карьеры.',
        achievements: [
          'Редизайнил существующие интерфейсы и улучшал поведение UI.',
          'Использовал Angular, TypeScript, CSS, Tailwind и DevExtreme.'
        ],
        stack: 'Angular, TypeScript, CSS, Tailwind, DevExtreme'
      }
    ],
    educationLanguages: 'Образование и языки',
    education: 'Образование',
    educationName: 'Тверской химико-технологический колледж',
    educationDetails: 'Информационные системы · 2020',
    workFormat: 'Формат работы',
    workFormatValue: 'Полностью удаленно · международная продуктовая или проектная команда',
    russian: 'Русский',
    russianLevel: 'Родной',
    english: 'Английский',
    englishLevel: 'A2 · развиваю разговорный и профессиональный уровень',
    selectedProjects: 'Избранные проекты',
    responsibility: 'Зона ответственности',
    responsibilityValue: 'архитектура UI, Form Builder, динамический рендеринг полей, клиентская валидация, Vite library build, CI/CD',
    projects: [
      {
        number: '01',
        title: 'Code-first CMS',
        role: 'Senior Frontend Engineer',
        description: 'CMS в виде Symfony-бандла с админ-разделами на основе метаданных, динамическим рендерингом форм и фронтендом на Vite. Создание новых админ-разделов ускорилось с дней кастомной разработки до часов.',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Symfony']
      },
      {
        number: '02',
        title: 'OptiFit Workout Tracker',
        role: 'Telegram Mini App · Pet project',
        description: 'Собственное приложение для учета силовых тренировок, кардио и активности, подготовленное для Telegram Mini Apps и мобильной версии на Capacitor.',
        stack: ['Vue 3', 'Quasar', 'Pinia', 'Telegram Mini Apps'],
        github: 'github.com/deepreshion'
      },
      {
        number: '03',
        title: 'Городские и социальные платформы',
        role: 'Senior Frontend Engineer',
        description: 'Инфраструктурные интерфейсы для городских сервисов Москвы: насыщенные данными дашборды, фильтры и таблицы с фокусом на надежность, доступность и массовое использование.',
        stack: ['Vue', 'TypeScript', 'Cypress', 'a11y']
      }
    ],
    note: 'Большинство коммерческих проектов не может быть опубликовано из-за ограничений конфиденциальности.'
  }
} as const
