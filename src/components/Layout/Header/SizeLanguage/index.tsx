import { theme } from '@/hooks/useChakraTheme/theme'
import { SizeLanguageProps } from './types'

import { Button } from '@/components/Button'
import { useLayout } from '@/hooks/useLayout'

import * as S from './styles'

export const SizeLanguage = ({ ...rest }: SizeLanguageProps) => {
  const { setDecreaseFontSize, setDefaultFontSize, setIncreaseFontSize } = useLayout()

  return (
    <S.Container gap={theme.sizes[32]} onClick={(event) => event.stopPropagation()} {...rest}>
      <Button onClick={setDecreaseFontSize}>-A</Button>

      <Button onClick={setDefaultFontSize}>A</Button>

      <Button onClick={setIncreaseFontSize}>+A</Button>
    </S.Container>
  )
}
