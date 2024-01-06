import { Img, Menu, MenuButton, useMediaQuery } from '@chakra-ui/react'

import { LanguageModal } from './LanguageModal'
import { useTranslation } from '@/hooks/useTranslation/Context'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSun } from 'react-icons/fa'

import * as S from './styles'

export const Header = () => {
  const [isLargerThanHD] = useMediaQuery(['(max-width: 1200px)', '(display-mode: browser)'])

  const { t } = useTranslation()

  return (
    <S.Container>
      <S.Content padding={['0 32px 0 32px', '0 32px 0 32px', '0 64px 0 64px']}>
        <S.Logo>
          WEB
          <S.Text color='yellow.300' fontWeight={800}>
            DEV
          </S.Text>
        </S.Logo>

        <S.Nav gap={['32px', '32px', '48px']}>
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

          <S.Text>
            <FaSun size={22} />
          </S.Text>

          <Menu>
            <MenuButton>
              <S.Text>
                EN
                <Img w={5} src='icons/eua.png' />
              </S.Text>
            </MenuButton>
            <LanguageModal />
          </Menu>

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
