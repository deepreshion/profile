export const useReducedMotion = () => {
  const reducedMotion = shallowRef(false)
  let mediaQuery: MediaQueryList | undefined
  const update = (event?: MediaQueryListEvent) => { reducedMotion.value = event?.matches ?? mediaQuery?.matches ?? false }

  onMounted(() => {
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    update()
    mediaQuery.addEventListener('change', update)
  })

  onBeforeUnmount(() => mediaQuery?.removeEventListener('change', update))
  return readonly(reducedMotion)
}
