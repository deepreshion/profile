export type PortfolioLocale = 'en' | 'ru'

export const portfolioMessages = {
  en: {
    seo: {
      title: 'Ruslan Vorontsov - Senior Frontend Engineer',
      description: 'Senior Frontend Engineer with 6+ years of experience in Vue, Nuxt, TypeScript, CMS, B2B platforms, architecture, test automation and AI-assisted engineering workflows.'
    },
    header: {
      backToTop: 'Back to top',
      navigationLabel: 'Main navigation',
      menuLabel: 'Toggle menu',
      downloadCv: 'Download CV',
      languageLabel: 'Select language',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Work cases', href: '#skills' },
        { label: 'Focus', href: '#interests' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    hero: {
      eyebrow: 'Open to remote international teams',
      firstName: 'Ruslan',
      lastName: 'Vorontsov',
      role: 'Senior Frontend Engineer',
      techLine: ['Vue.js', 'Nuxt', 'TypeScript'],
      lede: '6+ years building corporate web applications, CMS products and B2B platforms with Vue and TypeScript, focused on practicality and quality.',
      projectsCta: 'View projects',
      contactCta: 'Contact me',
      portraitAlt: 'Black and white portrait of Ruslan Vorontsov',
      portraitLabel: 'Russia - Remote worldwide'
    },
    profile: {
      ariaLabel: 'Profile overview',
      aboutTitle: 'About me',
      aboutIntro: 'I build reliable frontend systems for business-critical web products.',
      aboutText: 'My background combines hands-on Vue and TypeScript development, architecture decisions, migrations from legacy stacks, testing processes, AI-assisted automation and close work with analysts and QA.',
      skillsTitle: 'Work cases',
      technologiesTitle: 'Technologies'
    },
    sections: {
      capabilitiesKicker: 'What I bring',
      capabilitiesTitle: 'Capabilities',
      projectsKicker: 'Selected work',
      projectsTitle: 'Projects with purpose.',
      projectsText: 'Selected projects that influenced me the most, gave me experience or created growth points.',
      experienceKicker: 'Experience',
      experienceTitle: '6+ years in frontend engineering.',
      experienceText: 'Corporate applications, admin systems, CMS, B2B platforms and infrastructure services built with Vue and TypeScript.'
    },
    projects: [
      { number: '01', title: 'Code-first CMS', description: 'A Symfony-bundle CMS with metadata-driven admin sections, dynamic form rendering and Vite-based frontend delivery. New admin sections moved from days of custom frontend work to hours.', stack: ['Vue 3', 'TypeScript', 'Vite', 'Symfony'], tone: 'lime' },
      { number: '02', title: 'OptiFit Workout Tracker', description: 'A self-built workout tracking app for strength training, cardio and activity logs, prepared for Telegram Mini Apps and a Capacitor mobile version.', stack: ['Vue 3', 'Quasar', 'Pinia', 'Telegram Mini Apps'], tone: 'silver', source: 'https://github.com/deepreshion/opti-fit', url: 'https://deepreshion.github.io/opti-fit'  },
      // { number: '03', title: 'City and Social Platforms', description: 'Infrastructure interfaces for Moscow city services: data-heavy dashboards, filters and tables focused on reliability, accessibility and broad public usage.', stack: ['Vue', 'TypeScript', 'Cypress', 'a11y'], tone: 'graphite' },
      // { number: '04', title: 'Frontend Modernization', description: 'Migration work across legacy projects from Webpack to Vite and from Vue 2 to Vue 3, improving local development and release confidence without stopping business workflows.', stack: ['Vue 3', 'Vite', 'Vitest', 'Cypress'], tone: 'olive' }
    ],
    projectLinks: { github: 'on GitHub', discuss: 'Discuss' },
    workCases: [
      {
        title: 'Project migration',
        text: 'Updated projects from Vue 2 to Vue 3 step by step while keeping current tasks releasable.'
      },
      {
        title: 'Faster code delivery to production',
        text: 'Removed bottlenecks in the dev/build pipeline so changes could be checked faster and brought to release.'
      },
      {
        title: 'Tests around risky scenarios',
        text: 'Covered access rights, forms, section transitions and data updates.'
      },
      {
        title: 'Long-lived codebase support',
        text: 'Improved the existing codebase without breaking familiar business processes.'
      }
    ],
    experience: [
      {
        years: 'Mar 2020 - Present',
        company: 'Program Product',
        role: 'Senior Frontend Engineer',
        roles: [
          {
            years: '2024 - Present',
            role: 'Senior Frontend Engineer',
            achievements: [
              'Acted as technical lead',
              'Owned architecture and shared code standards',
              'Introduced AI-assisted workflows to speed up work processes'
            ]
          },
          {
            years: '2022 - 2024',
            role: 'Middle Frontend Engineer',
            achievements: [
              'Built corporate web applications, admin systems and B2B platforms with Vue 3 and TypeScript',
              'Improved outdated project tech stacks, including migration and modernization',
              'Improved release quality through smoke checks, E2E scenarios and shared frontend standards'
            ]
          },
          {
            years: 'Mar 2020 - 2022',
            role: 'Frontend Developer',
            achievements: [
              'Developed Vue and TypeScript modules',
              'Built page layouts',
              'Implemented forms, tables, filters and other reusable components'
            ]
          }
        ]
      },
      {
        years: 'Jan 2020 - Mar 2020',
        company: 'ALTED',
        role: 'Frontend Developer',
        achievements: [
          'Worked on an Angular and DevExtreme web application as an early-career frontend engineer',
          'Redesigned existing user interfaces and improved UI behavior',
        ]
      }
    ],
    stats: {
      ariaLabel: 'Engineering stats',
      heading: 'Skills',
      value: '6+ YEARS',
      items: [['Technical skills', 95], ['Architectural thinking', 90], ['Testing', 85], ['Security', 80], ['Performance', 95], ['Process management', 80], ['Problem solving', 90], ['Communication', 80]]
    },
    capabilities: [
      { icon: 'code', title: 'Frontend delivery', text: 'Full-cycle development of corporate web apps, admin panels, CMS and B2B platforms.' },
      { icon: 'gauge', title: 'Testing and reliability', text: 'Smoke and E2E test coverage that catches regressions before production releases.' },
      { icon: 'layers', title: 'Architecture', text: 'Vue, TypeScript, microfrontends and modular systems built for independent team delivery.' },
      { icon: 'users', title: 'Technical leadership', text: 'Architecture decisions, code standards and close collaboration with analysts and QA.' }
    ],
    interests: {
      kicker: 'Where I want to work',
      title: 'I am interested in early-stage products, open-source and engineering platforms.',
      text: 'I am interested in teams where frontend affects more than the interface: startups, open-source projects, developer tools, CMS platforms and products with a strong engineering culture. I enjoy environments where ideas are shipped quickly, architecture matters and internal tools make teams faster.',
      items: [
        { icon: 'rocket', title: 'Startups and early-stage products', text: 'Fast product cycles, direct ownership and room to shape core frontend decisions.' },
        { icon: 'gitFork', title: 'Open-source and developer tooling', text: 'Projects that improve engineering workflows and can grow through clear APIs and documentation.' },
        { icon: 'layers', title: 'Product engineering', text: 'Frontend work connected to business goals, user feedback and measurable product outcomes.' },
        { icon: 'users', title: 'AI-assisted engineering automation', text: 'Using coding agents to accelerate routine engineering work while keeping architecture, review and final responsibility under engineer control.' }
      ]
    },
    details: [
      { icon: 'mapPin', label: 'Location', value: 'Russia - Remote worldwide' },
      { icon: 'clock', label: 'Experience', value: '6+ years' },
      { icon: 'languages', label: 'Languages', value: 'Russian native - English B1' }
    ],
    footer: {
      kicker: 'Looking for a frontend engineer?',
      titleLine: "Let's build something",
      titleAccent: 'worth remembering.',
      cta: 'Start a conversation',
      copyright: 'Ruslan Vorontsov'
    }
  },
  ru: {
    seo: {
      title: 'Руслан Воронцов - Senior Frontend Engineer',
      description: 'Senior Frontend Engineer с опытом 6+ лет во Vue, Nuxt, TypeScript, CMS, B2B-платформах, архитектуре, автоматизации тестирования и AI-assisted engineering workflows.'
    },
    header: {
      backToTop: 'Наверх',
      navigationLabel: 'Основная навигация',
      menuLabel: 'Открыть меню',
      downloadCv: 'Скачать CV',
      languageLabel: 'Выбор языка',
      links: [
        { label: 'Обо мне', href: '#about' },
        { label: 'Рабочие кейсы', href: '#skills' },
        { label: 'Фокус', href: '#interests' },
        { label: 'Проекты', href: '#projects' },
        { label: 'Опыт', href: '#experience' },
        { label: 'Контакты', href: '#contact' }
      ]
    },
    hero: {
      eyebrow: 'Открыт к удаленной работе в международных командах',
      firstName: 'Ruslan',
      lastName: 'Vorontsov',
      role: 'Senior Frontend Engineer',
      techLine: ['Vue.js', 'Nuxt', 'TypeScript'],
      lede: '6+ лет создаю корпоративные веб-приложения, CMS-продукты и B2B-платформы на Vue и TypeScript с фокусом на практичность и качество.',
      projectsCta: 'Смотреть проекты',
      contactCta: 'Связаться',
      portraitAlt: 'Черно-белый портрет Руслана Воронцова',
      portraitLabel: 'Россия - удаленно по миру'
    },
    profile: {
      ariaLabel: 'Обзор профиля',
      aboutTitle: 'Обо мне',
      aboutIntro: 'Создаю надежные фронтенд-системы для бизнес-критичных веб-продуктов.',
      aboutText: 'Мой опыт объединяет практическую разработку на Vue и TypeScript, архитектурные решения, миграции с легаси-стеков, тестовые процессы, автоматизацию через AI-агентов и плотную работу с аналитиками и QA.',
      skillsTitle: 'Рабочие кейсы',
      technologiesTitle: 'Технологии'
    },
    sections: {
      capabilitiesKicker: 'Что я привношу',
      capabilitiesTitle: 'Компетенции',
      projectsKicker: 'Избранные работы',
      projectsTitle: 'Проекты с понятной целью.',
      projectsText: 'Подборка проектов, которые больше всего на меня повлияли, дали опыт или точки роста.',
      experienceKicker: 'Опыт',
      experienceTitle: '6+ лет во фронтенд-разработке.',
      experienceText: 'Корпоративные приложения, админ-системы, CMS, B2B-платформы и инфраструктурные сервисы на Vue и TypeScript.'
    },
    projects: [
      { number: '01', title: 'Code-first CMS', description: 'CMS в виде Symfony-бандла с админ-разделами на основе метаданных, динамическим рендерингом форм и фронтендом на Vite. Создание новых админ-разделов ускорилось с дней кастомной разработки до часов.', stack: ['Vue 3', 'TypeScript', 'Vite', 'Symfony'], tone: 'lime' },
      { number: '02', title: 'OptiFit Workout Tracker', description: 'Собственное приложение для учета силовых тренировок, кардио и активности, подготовленное для Telegram Mini Apps и мобильной версии на Capacitor.', stack: ['Vue 3', 'Quasar', 'Pinia', 'Telegram Mini Apps'], tone: 'silver', source: 'https://github.com/deepreshion/opti-fit', url: 'https://deepreshion.github.io/opti-fit'  },
      // { number: '03', title: 'Городские и социальные платформы', description: 'Инфраструктурные интерфейсы для городских сервисов Москвы: насыщенные данными дашборды, фильтры и таблицы с фокусом на надежность, доступность и массовое использование.', stack: ['Vue', 'TypeScript', 'Cypress', 'a11y'], tone: 'graphite' },
      // { number: '04', title: 'Модернизация фронтенда', description: 'Миграции легаси-проектов с Webpack на Vite и с Vue 2 на Vue 3, улучшающие локальную разработку и надежность релизов без остановки бизнес-процессов.', stack: ['Vue 3', 'Vite', 'Vitest', 'Cypress'], tone: 'olive' }
    ],
    projectLinks: { github: 'на GitHub', discuss: 'Обсудить' },
    workCases: [
      {
        title: 'Миграция проектов',
        text: 'Поэтапное обновление проектов с Vue 2 на Vue 3, сохраняя возможность выпускать текущие задачи.'
      },
      {
        title: 'Ускорение доставки кода на прод',
        text: 'Убирал узкие места в dev/build pipeline, чтобы быстрее проверять изменения и доводить их до релиза.'
      },
      {
        title: 'Тесты вокруг рискованных сценариев',
        text: 'Покрывал права доступа, формы, переходы между разделами и обновление данных.'
      },
      {
        title: 'Поддержка долгоживущего кода',
        text: 'Улучшал существующую кодовую базу без поломки привычных бизнес-процессов.'
      }
    ],
    experience: [
      {
        years: 'Март 2020 - сейчас',
        company: 'Program Product',
        role: 'Senior Frontend Engineer',
        roles: [
          {
            years: '2024 - сейчас',
            role: 'Senior Frontend Engineer',
            achievements: [
              'Выступал техническим лидером',
              'Отвечал за архитектуру и общие стандарты кода',
              'Внедрял AI-assisted workflows для ускорения рабочих процессов'
            ]
          },
          {
            years: '2022 - 2024',
            role: 'Middle Frontend Engineer',
            achievements: [
              'Разрабатывал корпоративные веб-приложения, админ-системы и B2B-платформы на Vue 3 и TypeScript',
              'Работал над улучшением устаревшего технического стека проектов, его миграцией и актуализацией',
              'Улучшал качество релизов через smoke-проверки, E2E-сценарии и общие фронтенд-стандарты'
            ]
          },
          {
            years: 'Март 2020 - 2022',
            role: 'Frontend Developer',
            achievements: [
              'Разрабатывал Vue- и TypeScript-мудули',
              'Занимался версткой страниц',
              'Реализовывал формы, таблицы, фильтры и другие переиспользуемые компоненты',
            ]
          }
        ]
      },
      {
        years: 'Январь 2020 - март 2020',
        company: 'ALTED',
        role: 'Frontend Developer',
        achievements: [
          'Работал над веб-приложением на Angular и DevExtreme на старте фронтенд-карьеры',
          'Редизайнил существующие интерфейсы и улучшал поведение UI',
        ]
      }
    ],
    stats: {
      ariaLabel: 'Инженерные показатели',
      heading: 'Навыки',
      value: '6+ ЛЕТ',
      items: [['Технические умения', 95], ['Архитектурное мышление', 90], ['Тестирование', 85], ['Безопасность', 80], ['Производительность', 95], ['Управление процессами', 80], ['Решение проблем', 90], ['Коммуникация', 80]]
    },
    capabilities: [
      { icon: 'code', title: 'Фронтенд под ключ', text: 'Полный цикл разработки корпоративных веб-приложений, админ-панелей, CMS и B2B-платформ.' },
      { icon: 'gauge', title: 'Тестирование и надежность', text: 'Smoke- и E2E-покрытие, которое ловит регрессии до продакшен-релизов.' },
      { icon: 'layers', title: 'Архитектура', text: 'Vue, TypeScript, микрофронтенды и модульные системы для независимой работы команд.' },
      { icon: 'users', title: 'Техническое лидерство', text: 'Архитектурные решения, стандарты кода и плотная работа с аналитиками и QA.' }
    ],
    interests: {
      kicker: 'Где хочу работать',
      title: 'Мне интересны ранние продукты, open-source и инженерные платформы.',
      text: 'Мне интересны команды, где фронтенд влияет не только на интерфейс: стартапы, open-source-проекты, developer tools, CMS-платформы и продукты с сильной инженерной культурой. Нравится среда, где идеи быстро доходят до пользователей, архитектура имеет значение, а внутренние инструменты ускоряют команды.',
      items: [
        { icon: 'rocket', title: 'Стартапы и early-stage продукты', text: 'Быстрые продуктовые циклы, личная ответственность и возможность влиять на ключевые фронтенд-решения.' },
        { icon: 'gitFork', title: 'Open-source и developer tooling', text: 'Проекты, которые улучшают инженерные процессы и растут через понятные API и документацию.' },
        { icon: 'layers', title: 'Продуктовая инженерия', text: 'Фронтенд, связанный с бизнес-целями, пользовательской обратной связью и измеримым результатом.' },
        { icon: 'users', title: 'Автоматизация разработки через AI-агентов', text: 'Использование AI для ускорения рутинной инженерной работы при сохранении архитектурных решений, ревью и финальной ответственности за инженером.' }
      ]
    },
    details: [
      { icon: 'mapPin', label: 'Локация', value: 'Россия - удаленно по миру' },
      { icon: 'clock', label: 'Опыт', value: '6+ лет' },
      { icon: 'languages', label: 'Языки', value: 'Русский родной - английский B1' }
    ],
    footer: {
      kicker: 'Нужен фронтенд-инженер?',
      titleLine: 'Давайте создадим что-то',
      titleAccent: 'что запомнится.',
      cta: 'Написать',
      copyright: 'Руслан Воронцов'
    }
  }
} as const
