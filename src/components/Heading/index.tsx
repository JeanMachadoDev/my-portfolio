import { HeadingProps } from './types'

import * as S from './styles'

export const Heading = ({ children, size = 'small', color = 'default', ...rest }: HeadingProps) => {
  return (
    <S.Heading size={size} color={color} {...rest}>
      {children}
    </S.Heading>
  )
}
