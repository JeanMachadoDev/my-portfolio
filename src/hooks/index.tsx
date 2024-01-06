'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { LayoutProvider } from './useLayout/Provider'
import { TranslationProvider } from './useTranslation/Provider'

import theme from '@/styles/theme'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <TranslationProvider>
        <LayoutProvider>{children}</LayoutProvider>
      </TranslationProvider>
    </ChakraProvider>
  )
}
