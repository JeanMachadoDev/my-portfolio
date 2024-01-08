import { ButtonProps } from './types'

import * as S from './styles'

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Container {...rest}>{children}</S.Container>
}
