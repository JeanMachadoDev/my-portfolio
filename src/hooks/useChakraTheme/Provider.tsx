import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { theme } from '@/styles/theme'
import { useColorTheme } from '../useColorTheme/Context'

export const ChakraThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { colorTheme } = useColorTheme()

  return <ChakraProvider theme={extendTheme({ ...theme, colors: colorTheme })}>{children}</ChakraProvider>
}
