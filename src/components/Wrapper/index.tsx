import { ReactChildrenProps } from '@/utils/globalTypes'

import { theme } from '@/hooks/useChakraTheme/theme'

import * as S from './styles'

export const Wrapper = ({ children }: ReactChildrenProps) => {
  return (
    <S.Container
      padding={[
        `0 ${theme.sizes[32]} 0 ${theme.sizes[32]}`,
        `0 ${theme.sizes[32]} 0 ${theme.sizes[32]}`,
        `0 ${theme.sizes[64]} 0 ${theme.sizes[64]}`,
      ]}
    >
      {children}
    </S.Container>
  )
}
