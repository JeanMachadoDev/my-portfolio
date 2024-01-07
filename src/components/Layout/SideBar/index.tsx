import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react'

import { theme } from '@/hooks/useChakraTheme/theme'
import { useLayout } from '@/hooks/useLayout/Context'

import { BoxWithLineBelow } from '@/components/BoxWithLineBelow'

import * as S from './styles'

export const SideBar = () => {
  const { isMenuOpen, onIsMenuOpen } = useLayout()

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
      </DrawerContent>
    </Drawer>
  )
}
