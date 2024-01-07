import { useMediaQuery } from '@chakra-ui/react'

import { theme } from '@/hooks/useChakraTheme/theme'
import { useLayout } from '@/hooks/useLayout/Context'
import { SizeLanguageProps } from './types'

import { BoxWithLineBelow } from '@/components/BoxWithLineBelow'

import * as S from './styles'

export const SizeLanguage = ({ ...rest }: SizeLanguageProps) => {
  const [isLargerThanHD] = useMediaQuery(['(max-width: 1200px)', '(display-mode: browser)'])

  const { onDecreaseFontSize, onDefaultFontSize, onIncreaseFontSize } = useLayout()

  return (
    <S.Container gap={isLargerThanHD ? theme.sizes[48] : theme.sizes[16]}>
      <BoxWithLineBelow onClick={onDecreaseFontSize} {...rest}>
        -A
      </BoxWithLineBelow>
      <BoxWithLineBelow onClick={onDefaultFontSize} {...rest}>
        A
      </BoxWithLineBelow>
      <BoxWithLineBelow onClick={onIncreaseFontSize} {...rest}>
        +A
      </BoxWithLineBelow>
    </S.Container>
  )
}
