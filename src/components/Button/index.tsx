import { ButtonProps } from './types'

import * as S from './styles'

export const Button = ({ children, size = 'small', ...rest }: ButtonProps) => {
  return (
    <S.Container size={size} {...rest}>
      {children}
    </S.Container>
  )
}
