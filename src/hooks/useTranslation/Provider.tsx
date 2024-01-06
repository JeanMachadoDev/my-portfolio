import { ReactNode, useCallback, useEffect, useState } from 'react'

import { TranslationContext } from './Context'
import { Languages, LocaleProps } from '@/i18n/locales/types'
import { locales } from '@/i18n/locales'

import { ReactChildrenProps } from '@/utils/globalTypes/types'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'

export const TranslationProvider = ({ children }: ReactChildrenProps) => {
  const [language, setLanguage] = useState<LocaleProps>('en-US')

  const changeLanguage = useCallback((value: LocaleProps) => {
    setLanguage(!value ? Languages.en : value)

    setLocalStorage({
      key: '@webdev-language',
      value: !value ? Languages.en : value,
    })
  }, [])

  const t = useCallback(
    (value: string) => {
      const text = locales[language][value]

      if (!text) return value

      return text
    },
    [language],
  )

  const handleInitialLanguage = () => {
    const language = getLocalStorage('@webdev-language')

    changeLanguage(language)
  }

  useEffect(() => handleInitialLanguage(), [])

  return (
    <TranslationContext.Provider
      value={{
        t,
        language,
        changeLanguage,
      }}
    >
      {children}
    </TranslationContext.Provider>
  )
}
