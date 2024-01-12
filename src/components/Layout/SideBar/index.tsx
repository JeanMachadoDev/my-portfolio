import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react'

import { scrollToSection } from '@/utils/functions/scrollToSection'

import { theme } from '@/hooks/useChakraTheme/theme'
import { useLayout } from '@/hooks/useLayout/Context'
import { useColorTheme } from '@/hooks/useColorTheme/Context'

import { BoxWithLineBelow } from '@/components/BoxWithLineBelow'
import { useTranslation } from '@/hooks/useTranslation/Context'
import { SizeLanguage } from '../Header/SizeLanguage'

import * as S from './styles'

export const SideBar = () => {
  const { isMenuOpen, onIsMenuOpen } = useLayout()
  const { colorTheme } = useColorTheme()
  const { t } = useTranslation()

  return (
    <Drawer isOpen={isMenuOpen} placement='left' onClose={() => onIsMenuOpen(false)}>
      <DrawerOverlay />

      <DrawerContent maxWidth={['80%', '22.5rem', '22.5rem']}>
        <S.CloseButtom />

        <S.Content>
          <BoxWithLineBelow fontSize={theme.sizes[22]} onClick={() => scrollToSection('home')}>
            {t('Home').toLocaleUpperCase()}
          </BoxWithLineBelow>
          <BoxWithLineBelow fontSize={theme.sizes[22]} onClick={() => scrollToSection('about')}>
            {t('About').toLocaleUpperCase()}
          </BoxWithLineBelow>
          <BoxWithLineBelow fontSize={theme.sizes[22]}>{t('Skills').toLocaleUpperCase()}</BoxWithLineBelow>
          <BoxWithLineBelow fontSize={theme.sizes[22]}>{t('Services').toLocaleUpperCase()}</BoxWithLineBelow>
          <BoxWithLineBelow fontSize={theme.sizes[22]}>{t('Projects').toLocaleUpperCase()}</BoxWithLineBelow>
          <BoxWithLineBelow fontSize={theme.sizes[22]}>{t('Contact').toLocaleUpperCase()}</BoxWithLineBelow>
        </S.Content>

        <S.Footer borderTopWidth={theme.sizes[1]} borderColor={colorTheme.border}>
          <SizeLanguage fontSize={theme.sizes[22]} />
        </S.Footer>
      </DrawerContent>
    </Drawer>
  )
}
