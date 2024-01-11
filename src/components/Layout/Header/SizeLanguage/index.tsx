import { theme } from '@/hooks/useChakraTheme/theme'
import { SizeLanguageProps } from './types'

import { Button } from '@/components/Button'
import { useLayout } from '@/hooks/useLayout/Context'

import * as S from './styles'

export const SizeLanguage = ({ ...rest }: SizeLanguageProps) => {
  const { onDecreaseFontSize, onDefaultFontSize, onIncreaseFontSize } = useLayout()

  return (
    <S.Container gap={theme.sizes[32]} onClick={(event) => event.stopPropagation()} {...rest}>
      <Button onClick={onDecreaseFontSize}>-A</Button>

      <Button onClick={onDefaultFontSize}>A</Button>

      <Button onClick={onIncreaseFontSize}>+A</Button>
    </S.Container>
  )
}
