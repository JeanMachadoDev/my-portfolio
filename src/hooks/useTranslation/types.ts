import { LocaleProps } from '@/locales/types'
import translations from '@/locales/en-US.json'

export type TranslationsProps = typeof translations

export type TranslationsKeysProps = keyof TranslationsProps

export type TranslationContextProps = {
  language: LocaleProps
  t: (value: string | TranslationsKeysProps) => string
  changeLanguage: (value: LocaleProps) => void
}
