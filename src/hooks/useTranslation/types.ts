import { ReactNode } from 'react'
import { LocaleProps } from '@/i18n/locales/types'

export type TranslationContextProps = {
  language: LocaleProps
  t: (value: string) => string
  changeLanguage: (value: LocaleProps) => void
}
