import { LocaleProps } from '@/locales/types'

export type TranslationContextProps = {
  language: LocaleProps
  t: (value: string) => string
  changeLanguage: (value: LocaleProps) => void
}
