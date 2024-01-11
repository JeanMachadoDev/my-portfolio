import { TextProps } from './types'

import * as S from './styles'

export const Text = ({ children, size = 'small', ...rest }: TextProps) => {
  return (
    <S.Text size={size} {...rest}>
      {children}
    </S.Text>
  )
}
