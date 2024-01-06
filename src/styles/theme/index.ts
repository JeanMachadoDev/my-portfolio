import { extendTheme, theme } from '@chakra-ui/react'

export const customTheme = {
  ...theme,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    ...theme.colors,
    secondary: '#141c27',
  },
}

export default extendTheme(customTheme)
