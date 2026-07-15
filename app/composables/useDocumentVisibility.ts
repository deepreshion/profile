export const useDocumentVisibility = () => {
  const visible = shallowRef(true)
  const update = () => { visible.value = document.visibilityState === 'visible' }

  onMounted(() => {
    update()
    document.addEventListener('visibilitychange', update)
  })

  onBeforeUnmount(() => document.removeEventListener('visibilitychange', update))
  return readonly(visible)
}
