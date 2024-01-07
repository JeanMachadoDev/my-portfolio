import { Img, Menu, MenuButton, useColorMode, useMediaQuery } from '@chakra-ui/react'

import { ColorMode, ColorModeProps } from '@/hooks/useColorTheme/types'
import { useColorTheme } from '@/hooks/useColorTheme/Context'
import { useTranslation } from '@/hooks/useTranslation/Context'
import { useLayout } from '@/hooks/useLayout/Context'
import { theme } from '@/hooks/useChakraTheme/theme'

import { getLenguageIcon, getInitialNameIcon } from './helpers'
import { LanguageModal } from './LanguageModal'

import { BoxWithLineBelow } from '@/components/BoxWithLineBelow'
import { SizeLanguage } from './SizeLanguage'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSun, FaMoon } from 'react-icons/fa'

import * as S from './styles'

export const Header = () => {
  const [isLargerThanHD] = useMediaQuery(['(max-width: 1350px)', '(display-mode: browser)'])

  const { onIsMenuOpen } = useLayout()
  const { colorMode, toggleColorMode } = useColorMode()
  const { colorTheme, onColorMode } = useColorTheme()
  const { language, t } = useTranslation()

  const handleColorMode = (value: ColorModeProps) => {
    toggleColorMode()
    onColorMode(value)
  }

  return (
    <S.Container>
      <S.Content
        padding={[
          `0 ${theme.sizes[32]} 0 ${theme.sizes[32]}`,
          `0 ${theme.sizes[32]} 0 ${theme.sizes[32]}`,
          `0 ${theme.sizes[64]} 0 ${theme.sizes[64]}`,
        ]}
      >
        <S.Logo>
          WEB
          <S.Logo color={colorTheme.textPink} fontWeight={800}>
            DEV
          </S.Logo>
        </S.Logo>

        <S.Nav gap={[theme.sizes[32], theme.sizes[32], theme.sizes[42]]}>
          {!isLargerThanHD && (
            <>
              <BoxWithLineBelow>{t('Home').toLocaleUpperCase()}</BoxWithLineBelow>
              <BoxWithLineBelow>{t('About').toLocaleUpperCase()}</BoxWithLineBelow>
              <BoxWithLineBelow>{t('Skills').toLocaleUpperCase()}</BoxWithLineBelow>
              <BoxWithLineBelow>{t('Services').toLocaleUpperCase()}</BoxWithLineBelow>
              <BoxWithLineBelow>{t('Projects').toLocaleUpperCase()}</BoxWithLineBelow>
              <BoxWithLineBelow>{t('Contact').toLocaleUpperCase()}</BoxWithLineBelow>
            </>
          )}

          {!isLargerThanHD && <SizeLanguage />}

          <Menu placement='bottom-end'>
            <BoxWithLineBelow>
              <MenuButton>
                <BoxWithLineBelow>
                  {getInitialNameIcon(language)}
                  <Img width={theme.sizes[18]} mb={theme.sizes[1]} src={getLenguageIcon(language)} />
                </BoxWithLineBelow>
              </MenuButton>
            </BoxWithLineBelow>
            <LanguageModal />
          </Menu>

          {colorMode === ColorMode.dark ? (
            <S.Menu alignItems='center' onClick={() => handleColorMode(ColorMode.light)}>
              <FaSun size={theme.sizes[20]} />
            </S.Menu>
          ) : (
            <S.Menu alignItems='center' onClick={() => handleColorMode(ColorMode.dark)}>
              <FaMoon size={theme.sizes[20]} />
            </S.Menu>
          )}

          {isLargerThanHD && (
            <S.Menu onClick={() => onIsMenuOpen(true)}>
              <GiHamburgerMenu />
            </S.Menu>
          )}
        </S.Nav>
      </S.Content>
    </S.Container>
  )
}
