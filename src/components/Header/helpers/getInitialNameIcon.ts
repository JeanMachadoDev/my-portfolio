import { Languages, LocaleProps } from '@/locales/types'

export const getInitialNameIcon = (language: LocaleProps) => {
  const languages = {
    [Languages.en]: 'EN',
    [Languages.es]: 'ES',
    [Languages.fr]: 'FR',
    [Languages.pt]: 'PT',
  }

  return languages[language]
}
