import { useCallback, useEffect, useState } from 'react'

import { ReactChildrenProps } from '@/utils/globalTypes/types'
import { getColors } from './helpers/getColors'
import { ColorThemeContext } from './Context'
import { ColorMode, ColorModeProps } from './types'

export const ColorThemeProvider = ({ children }: ReactChildrenProps) => {
  const [colorTheme, setColorTheme] = useState(getColors(ColorMode.dark))

  const onColorMode = useCallback((value: ColorModeProps) => {
    setColorTheme(getColors(value))
  }, [])

  useEffect(() => {
    const colorModeSelected = localStorage.getItem('chakra-ui-color-mode') as ColorModeProps | null
    setColorTheme(colorModeSelected ? getColors(colorModeSelected) : getColors(ColorMode.dark))
  }, [])

  return (
    <ColorThemeContext.Provider
      value={{
        colorTheme,
        onColorMode,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  )
}
