export type Locale = 'en' | 'ru'

export const availableLocales = ['en', 'ru'] as const

export const useLocale = () => {
  const { locale, setLocale: setI18nLocale } = useI18n()

  const setLocale = async (nextLocale: Locale) => {
    await setI18nLocale(nextLocale)
  }

  return {
    locale: readonly(computed(() => locale.value as Locale)),
    locales: availableLocales,
    setLocale
  }
}
