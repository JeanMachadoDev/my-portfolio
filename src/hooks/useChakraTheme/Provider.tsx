import { ChakraProvider, extendTheme, theme as chakraTheme } from '@chakra-ui/react'

import { theme } from '@/hooks/useChakraTheme/theme'
import { useColorTheme } from '../useColorTheme/Context'
import { ColorMode } from '../useColorTheme/types'

export const ChakraThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { colorTheme } = useColorTheme()

  const createTheme = extendTheme({
    ...theme,
    config: {
      initialColorMode: ColorMode.light,
      useSystemColorMode: false,
    },
    colors: { ...chakraTheme.colors, ...colorTheme },
  })

  return <ChakraProvider theme={createTheme}>{children}</ChakraProvider>
}
