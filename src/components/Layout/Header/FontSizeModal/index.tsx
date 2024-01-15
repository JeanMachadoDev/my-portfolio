import { useMediaQuery } from '@chakra-ui/react'

import { useLayout } from '@/hooks/useLayout/state'
import { Button } from '@/components/Button'
import { theme } from '@/hooks/useChakraTheme/theme'

import * as S from './styles'

export const FontSizeModal = () => {
  const [isLargerThanHD] = useMediaQuery(['(max-width: 1350px)', '(display-mode: browser)'])

  const { setDecreaseFontSize, setDefaultFontSize, setIncreaseFontSize } = useLayout()

  return (
    <S.MenuList gap={isLargerThanHD ? theme.sizes[48] : theme.sizes[16]} onClick={(event) => event.stopPropagation()}>
      <Button onClick={setDecreaseFontSize}>-A</Button>

      <Button onClick={setDefaultFontSize}>A</Button>

      <Button onClick={setIncreaseFontSize}>+A</Button>
    </S.MenuList>
  )
}
