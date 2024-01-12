import { theme } from '@/hooks/useChakraTheme/theme'
import { WrapperProps } from './types'

import * as S from './styles'

export const Wrapper = ({ children, isResponsive = true }: WrapperProps) => {
  return <S.Container isResponsive={isResponsive}>{children}</S.Container>
}
