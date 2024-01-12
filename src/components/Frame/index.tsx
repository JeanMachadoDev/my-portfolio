import { FrameProps } from './types'

import * as S from './styles'

export const Frame = ({ children, ...rest }: FrameProps) => {
  return (
    <S.Container {...rest}>
      <S.BackBox />
      <S.FrontBox />
      <S.Image>{children}</S.Image>
    </S.Container>
  )
}
