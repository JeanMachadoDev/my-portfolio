'use client'

import { LayoutProvider } from './useLayout/Provider'
import { TranslationProvider } from './useTranslation/Provider'
import { ColorThemeProvider } from './useColorTheme/Provider'
import { ChakraThemeProvider } from './useChakraTheme/Provider'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ColorThemeProvider>
      <ChakraThemeProvider>
        <TranslationProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </TranslationProvider>
      </ChakraThemeProvider>
    </ColorThemeProvider>
  )
}
