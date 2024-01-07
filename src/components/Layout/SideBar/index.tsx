import { Drawer, DrawerContent, DrawerFooter, DrawerOverlay } from '@chakra-ui/react'

import { theme } from '@/hooks/useChakraTheme/theme'
import { useLayout } from '@/hooks/useLayout/Context'
import { useColorTheme } from '@/hooks/useColorTheme/Context'

import { BoxWithLineBelow } from '@/components/BoxWithLineBelow'
import { SizeLanguage } from '../Header/SizeLanguage'

import * as S from './styles'

export const SideBar = () => {
  const { isMenuOpen, onIsMenuOpen } = useLayout()
  const { colorTheme } = useColorTheme()

  return (
    <Drawer isOpen={isMenuOpen} placement='left' onClose={() => onIsMenuOpen(false)}>
      <DrawerOverlay />

      <DrawerContent maxWidth={['80%', '22.5rem', '22.5rem']}>
        <S.CloseButtom />

        <S.Content>
          <BoxWithLineBelow fontSize={theme.sizes[22]}>{'Home'.toLocaleUpperCase()}</BoxWithLineBelow>
          <BoxWithLineBelow fontSize={theme.sizes[22]}>{'About'.toLocaleUpperCase()}</BoxWithLineBelow>
          <BoxWithLineBelow fontSize={theme.sizes[22]}>{'Skills'.toLocaleUpperCase()}</BoxWithLineBelow>
          <BoxWithLineBelow fontSize={theme.sizes[22]}>{'Services'.toLocaleUpperCase()}</BoxWithLineBelow>
          <BoxWithLineBelow fontSize={theme.sizes[22]}>{'Projects'.toLocaleUpperCase()}</BoxWithLineBelow>
          <BoxWithLineBelow fontSize={theme.sizes[22]}>{'Contact'.toLocaleUpperCase()}</BoxWithLineBelow>
        </S.Content>

        <S.Footer borderTopWidth={theme.sizes[1]} borderColor={colorTheme.border}>
          <SizeLanguage fontSize={theme.sizes[22]} />
        </S.Footer>
      </DrawerContent>
    </Drawer>
  )
}
