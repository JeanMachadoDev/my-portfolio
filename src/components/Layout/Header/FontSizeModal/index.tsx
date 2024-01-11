import { useMediaQuery } from '@chakra-ui/react'

import { useLayout } from '@/hooks/useLayout/Context'
import { Button } from '@/components/Button'
import { theme } from '@/hooks/useChakraTheme/theme'

import * as S from './styles'

export const FontSizeModal = () => {
  const [isLargerThanHD] = useMediaQuery(['(max-width: 1350px)', '(display-mode: browser)'])

  const { onDecreaseFontSize, onDefaultFontSize, onIncreaseFontSize } = useLayout()

  return (
    <S.MenuList gap={isLargerThanHD ? theme.sizes[48] : theme.sizes[16]} onClick={(event) => event.stopPropagation()}>
      <Button onClick={onDecreaseFontSize}>-A</Button>

      <Button onClick={onDefaultFontSize}>A</Button>

      <Button onClick={onIncreaseFontSize}>+A</Button>
    </S.MenuList>
  )
}
