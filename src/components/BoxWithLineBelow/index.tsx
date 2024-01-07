import { useTranslation } from '@/hooks/useTranslation/Context'
import { BoxWithLineBelowProps } from './types'

import * as S from './styles'

export const BoxWithLineBelow = ({ children, ...rest }: BoxWithLineBelowProps) => {
  const { t } = useTranslation()

  return <S.Text {...rest}>{typeof children === 'string' ? t(children) : children}</S.Text>
}
