import '@emotion/react'
import { ChakraTheme } from '@chakra-ui/react'
import { customTheme } from '@/hooks/useChakraTheme/theme'

declare module '@emotion/react' {
  export interface Theme extends ChakraTheme {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      quintiario: string
      text: {
        500: string
        800: string
      }
      quartiary: string
      border: string
    }
    sizes: {
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      8: string
      10: string
      11: string
      12: string
      13: string
      14: string
      15: string
      16: string
      18: string
      19: string
      20: string
      22: string
      24: string
      26: string
      28: string
      30: string
      32: string
      42: string
      48: string
      64: string
    }
  }

  export function useTheme<T = ChakraTheme>(): T
}
