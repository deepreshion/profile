export const useAnimePortfolio = () => {
  let cleanup = () => {}

  onMounted(async () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = document.documentElement
    const progressBars = [...document.querySelectorAll<HTMLElement>('[data-progress]')]

    if (reducedMotion) {
      progressBars.forEach((bar) => { bar.style.width = `${bar.dataset.progress}%` })
      return
    }

    const { animate, stagger, onScroll } = await import('animejs')
    const animations: Array<{ revert: () => unknown }> = []
    const scrollObservers: Array<{ revert: () => unknown }> = []
    const listeners: Array<[EventTarget, string, EventListener]> = []
    root.classList.add('anime-ready')

    const play = (targets: Parameters<typeof animate>[0], parameters: Parameters<typeof animate>[1]) => {
      const animation = animate(targets, parameters)
      animations.push(animation)
      return animation
    }

    play('[data-header-item]', {
      opacity: [0, 1],
      y: [-12, 0],
      duration: 650,
      delay: stagger(55),
      ease: 'out(3)',
    })

    play('[data-hero-item]', {
      opacity: [0, 1],
      y: [34, 0],
      duration: 850,
      delay: stagger(95, { start: 120 }),
      ease: 'out(4)',
    })

    play('[data-hero-visual]', {
      opacity: [0, 1],
      clipPath: ['inset(0 0 100% 0 round 28px)', 'inset(0 0 0% 0 round 0px)'],
      duration: 1200,
      delay: 180,
      ease: 'inOut(3)',
    })

    play('.status-dot', {
      scale: [1, 1.5],
      boxShadow: ['0 0 0 5px rgba(183,216,75,.08)', '0 0 0 11px rgba(183,216,75,0)'],
      duration: 1450,
      alternate: true,
      loop: true,
      ease: 'inOutSine',
    })

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const element = entry.target as HTMLElement
        play(element, {
          opacity: [0, 1],
          y: [42, 0],
          scale: [.985, 1],
          duration: 850,
          ease: 'out(4)',
        })

        const bars = [...element.querySelectorAll<HTMLElement>('[data-progress]')]
        if (bars.length) {
          play(bars, {
            width: (target: HTMLElement) => `${target.dataset.progress}%`,
            duration: 1050,
            delay: stagger(65, { start: 180 }),
            ease: 'inOut(3)',
          })
        }

        const techItems = element.querySelectorAll('[data-tech-item]')
        if (techItems.length) {
          play(techItems, {
            opacity: [0, 1],
            y: [14, 0],
            scale: [.96, 1],
            duration: 520,
            delay: stagger(45, { start: 160 }),
            ease: 'out(3)',
          })
        }
        observer.unobserve(element)
      })
    }, { threshold: .14, rootMargin: '0px 0px -7% 0px' })

    document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element))

    const heroImage = document.querySelector('.hero-visual img')
    if (heroImage) {
      const heroScroll = onScroll({
        target: '.hero',
        enter: 'top top',
        leave: 'bottom top',
        sync: .7,
      })
      heroScroll.link(play(heroImage, { y: ['0%', '9%'], scale: [1, 1.045], ease: 'linear' }))
      scrollObservers.push(heroScroll)
    }

    document.querySelectorAll<HTMLElement>('[data-parallax-art]').forEach((art, index) => {
      const card = art.closest('[data-project-card]')
      if (!card) return
      const scroll = onScroll({
        target: card,
        enter: 'bottom top',
        leave: 'top bottom',
        sync: .8,
      })
      scroll.link(play(art, {
        y: ['-8%', '8%'],
        rotate: [index % 2 ? 3 : -3, index % 2 ? -2 : 2],
        ease: 'linear',
      }))
      scrollObservers.push(scroll)
    })

    const pageProgress = document.querySelector('[data-scroll-progress]')
    if (pageProgress) {
      const progressScroll = onScroll({
        target: document.body,
        enter: 'top top',
        leave: 'bottom bottom',
        sync: true,
      })
      progressScroll.link(play(pageProgress, { scaleX: [0, 1], ease: 'linear' }))
      scrollObservers.push(progressScroll)
    }

    document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((element) => {
      const move = ((event: PointerEvent) => {
        if (event.pointerType === 'touch') return
        const rect = element.getBoundingClientRect()
        const x = (event.clientX - rect.left - rect.width / 2) * .14
        const y = (event.clientY - rect.top - rect.height / 2) * .18
        play(element, { x, y, scale: 1.025, duration: 360, ease: 'out(4)' })
      }) as EventListener
      const leave = (() => play(element, { x: 0, y: 0, scale: 1, duration: 600, ease: 'outElastic(1, .55)' })) as EventListener
      element.addEventListener('pointermove', move)
      element.addEventListener('pointerleave', leave)
      listeners.push([element, 'pointermove', move], [element, 'pointerleave', leave])
    })

    document.querySelectorAll<HTMLElement>('[data-project-card]').forEach((card) => {
      const art = card.querySelector('[data-parallax-art]')
      const move = ((event: PointerEvent) => {
        if (event.pointerType === 'touch') return
        const rect = card.getBoundingClientRect()
        const rx = ((event.clientY - rect.top) / rect.height - .5) * -3
        const ry = ((event.clientX - rect.left) / rect.width - .5) * 4
        play(card, { rotateX: rx, rotateY: ry, duration: 500, ease: 'out(4)' })
        if (art) play(art, { x: ry * 1.4, y: rx * -1.4, duration: 650, ease: 'out(4)' })
      }) as EventListener
      const leave = (() => {
        play(card, { rotateX: 0, rotateY: 0, duration: 700, ease: 'outElastic(1, .65)' })
        if (art) play(art, { x: 0, y: 0, duration: 700, ease: 'outElastic(1, .65)' })
      }) as EventListener
      card.addEventListener('pointermove', move)
      card.addEventListener('pointerleave', leave)
      listeners.push([card, 'pointermove', move], [card, 'pointerleave', leave])
    })

    document.querySelectorAll<HTMLElement>('[data-tech-item]').forEach((item) => {
      const number = item.querySelector('span')
      const enter = (() => {
        if (number) play(number, { x: [0, 4], color: ['#b7d84b', '#f5f5f5'], duration: 320, ease: 'out(3)' })
      }) as EventListener
      const leave = (() => {
        if (number) play(number, { x: 0, color: '#b7d84b', duration: 420, ease: 'out(3)' })
      }) as EventListener
      item.addEventListener('pointerenter', enter)
      item.addEventListener('pointerleave', leave)
      listeners.push([item, 'pointerenter', enter], [item, 'pointerleave', leave])
    })

    cleanup = () => {
      revealObserver.disconnect()
      scrollObservers.forEach((observer) => observer.revert())
      animations.forEach((animation) => animation.revert())
      listeners.forEach(([target, event, handler]) => target.removeEventListener(event, handler))
      root.classList.remove('anime-ready')
    }
  })

  onBeforeUnmount(() => cleanup())
}
