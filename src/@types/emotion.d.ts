import '@emotion/react'
import { ChakraTheme } from '@chakra-ui/react'
import { customTheme } from '@/styles/theme'

declare module '@emotion/react' {
  export interface Theme extends ChakraTheme {
    colors: {
      secondary: string
    }
  }

  export function useTheme<T = ChakraTheme>(): T
}
