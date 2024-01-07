import { Flex, Img, Menu, MenuButton, useColorMode, useMediaQuery } from '@chakra-ui/react'

import { ColorMode, ColorModeProps } from '@/hooks/useColorTheme/types'
import { useColorTheme } from '@/hooks/useColorTheme/Context'
import { useTranslation } from '@/hooks/useTranslation/Context'
import { getLenguageIcon, getInitialNameIcon } from './helpers'
import { LanguageModal } from './LanguageModal'
import { theme } from '@/styles/theme'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSun, FaMoon } from 'react-icons/fa'

import * as S from './styles'

export const Header = () => {
  const [isLargerThanHD] = useMediaQuery(['(max-width: 1200px)', '(display-mode: browser)'])

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

        <S.Nav gap={[theme.sizes[32], theme.sizes[32], theme.sizes[48]]}>
          {!isLargerThanHD && (
            <>
              <S.Text>{t('Home').toLocaleUpperCase()}</S.Text>
              <S.Text>{t('About').toLocaleUpperCase()}</S.Text>
              <S.Text>{t('Skills').toLocaleUpperCase()}</S.Text>
              <S.Text>{t('Services').toLocaleUpperCase()}</S.Text>
              <S.Text>{t('Projects').toLocaleUpperCase()}</S.Text>
              <S.Text>{t('Contact').toLocaleUpperCase()}</S.Text>
            </>
          )}

          <Menu>
            <S.Text>
              <MenuButton>
                <S.Text>
                  {getInitialNameIcon(language)}
                  <Img width={theme.sizes[18]} mb={theme.sizes[1]} src={getLenguageIcon(language)} />
                </S.Text>
              </MenuButton>
            </S.Text>
            <LanguageModal />
          </Menu>

          {colorMode === ColorMode.dark ? (
            <Flex alignItems='center' onClick={() => handleColorMode(ColorMode.light)}>
              <FaSun size={theme.sizes[20]} />
            </Flex>
          ) : (
            <Flex alignItems='center' onClick={() => handleColorMode(ColorMode.dark)}>
              <FaMoon size={theme.sizes[20]} />
            </Flex>
          )}

          {isLargerThanHD && (
            <S.Menu>
              <GiHamburgerMenu />
            </S.Menu>
          )}
        </S.Nav>
      </S.Content>
    </S.Container>
  )
}
