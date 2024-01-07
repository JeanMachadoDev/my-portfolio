import { createContext, useContext } from 'react'
import { ColorThemeContextProps } from './types'

export const ColorThemeContext = createContext({} as ColorThemeContextProps)

export const useColorTheme = () => useContext(ColorThemeContext)
