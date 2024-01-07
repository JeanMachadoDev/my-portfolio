import { BoxWithLineBelowProps } from './types'

import * as S from './styles'

export const BoxWithLineBelow = ({ children, ...rest }: BoxWithLineBelowProps) => {
  return <S.Text {...rest}>{children}</S.Text>
}
