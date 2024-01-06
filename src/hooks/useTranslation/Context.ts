import { createContext, useContext } from 'react'
import { TranslationContextProps } from './types'

export const TranslationContext = createContext({} as TranslationContextProps)

export const useTranslation = () => useContext(TranslationContext)
