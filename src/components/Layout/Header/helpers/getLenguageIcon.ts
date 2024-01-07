import { Languages, LocaleProps } from '@/locales/types'

export const getLenguageIcon = (language: LocaleProps) => {
  const languages = {
    [Languages.en]: 'icons/eua.png',
    [Languages.es]: 'icons/es.png',
    [Languages.fr]: 'icons/fr.png',
    [Languages.pt]: 'icons/br.png',
  }

  return languages[language]
}
