import { Menu, MenuButton, useColorMode, useMediaQuery } from '@chakra-ui/react'

import { ColorMode, ColorModeProps } from '@/hooks/useColorTheme/types'
import { scrollToSection } from '@/utils/functions/scrollToSection'
import { useColorTheme } from '@/hooks/useColorTheme/Context'
import { useTranslation } from '@/hooks/useTranslation/Context'
import { useLayout } from '@/hooks/useLayout/context'
import { theme } from '@/hooks/useChakraTheme/theme'

import { getInitialNameIcon } from './helpers'
import { LanguageModal } from './LanguageModal'

import { BoxWithLineBelow } from '@/components/BoxWithLineBelow'
import { Wrapper } from '@/components/Wrapper'
import { Button } from '@/components/Button'
import { FontSizeModal } from './FontSizeModal'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSun, FaMoon } from 'react-icons/fa'

import * as S from './styles'

export const Header = () => {
  const [isLargerThanHD] = useMediaQuery(['(max-width: 1350px)', '(display-mode: browser)'])

  const { setIsMenuOpen } = useLayout()
  const { colorMode, toggleColorMode } = useColorMode()
  const { colorTheme, onColorMode } = useColorTheme()
  const { language, t } = useTranslation()

  const handleColorMode = (value: ColorModeProps) => {
    toggleColorMode()
    onColorMode(value)
  }

  return (
    <S.Container>
      <Wrapper isResponsive={false}>
        <S.Logo>
          WEB
          <S.Logo color={colorTheme.quartiary} fontWeight={800}>
            DEV
          </S.Logo>
        </S.Logo>

        <S.Nav gap={[theme.sizes[32], theme.sizes[32], theme.sizes[42]]}>
          {!isLargerThanHD && (
            <>
              <BoxWithLineBelow onClick={() => scrollToSection('home')}>
                {t('Home').toLocaleUpperCase()}
              </BoxWithLineBelow>

              <BoxWithLineBelow onClick={() => scrollToSection('about')}>
                {t('About').toLocaleUpperCase()}
              </BoxWithLineBelow>

              <BoxWithLineBelow>{t('Skills').toLocaleUpperCase()}</BoxWithLineBelow>
              <BoxWithLineBelow>{t('Services').toLocaleUpperCase()}</BoxWithLineBelow>
              <BoxWithLineBelow>{t('Projects').toLocaleUpperCase()}</BoxWithLineBelow>
              <BoxWithLineBelow>{t('Contact').toLocaleUpperCase()}</BoxWithLineBelow>
            </>
          )}

          <S.ButtonBox>
            {!isLargerThanHD && (
              <Menu placement='bottom-end'>
                <MenuButton>
                  <Button>A</Button>
                </MenuButton>
                <FontSizeModal />
              </Menu>
            )}

            <Menu placement='bottom-end'>
              <MenuButton>
                <Button>{getInitialNameIcon(language)}</Button>
              </MenuButton>
              <LanguageModal />
            </Menu>

            {colorMode === ColorMode.dark ? (
              <Button onClick={() => handleColorMode(ColorMode.light)}>
                <FaSun size={theme.sizes[16]} />
              </Button>
            ) : (
              <Button onClick={() => handleColorMode(ColorMode.dark)}>
                <FaMoon size={theme.sizes[16]} />
              </Button>
            )}

            {isLargerThanHD && (
              <Button onClick={() => setIsMenuOpen(true)}>
                <GiHamburgerMenu />
              </Button>
            )}
          </S.ButtonBox>
        </S.Nav>
      </Wrapper>
    </S.Container>
  )
}
