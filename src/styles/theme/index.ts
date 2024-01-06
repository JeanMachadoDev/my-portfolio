import { extendTheme, theme } from '@chakra-ui/react'

const customTheme = {
  ...theme,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
}

export default extendTheme(customTheme)
