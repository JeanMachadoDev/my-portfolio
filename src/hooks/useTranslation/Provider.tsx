import { useCallback, useEffect, useState } from 'react'

import { TranslationContext } from './Context'
import { Languages, LocaleProps } from '@/locales/types'
import { locales } from '@/locales'

import { ReactChildrenProps } from '@/utils/globalTypes/types'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'
import { TranslationsKeysProps } from './types'

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
    (value: string | TranslationsKeysProps) => {
      const text = locales[language][value as TranslationsKeysProps]

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
