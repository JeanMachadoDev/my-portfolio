import { Img } from '@chakra-ui/react'

import { useColorTheme } from '@/hooks/useColorTheme/Context'
import { useTranslation } from '@/hooks/useTranslation/Context'

import { Particle } from '@/components/Particle'
import { Wrapper } from '@/components/Wrapper'
import { TextEffect } from '@/components/TextEffect'
import { Button } from '@/components/Button'

import { BiSolidDownload } from 'react-icons/bi'

import * as S from './styles'

export const Home = () => {
  const { language, t } = useTranslation()
  const { colorTheme } = useColorTheme()

  const handleDownload = () => {
    const pdfUrl = 'docs/cv-jean-machado.pdf'

    const link = document.createElement('a')
    link.href = pdfUrl
    link.target = '_blank'
    link.download = 'cv-jean-machado.pdf'
    link.click()
  }

  return (
    <S.Container>
      <Particle />

      <Wrapper>
        <S.LeftContent>
          <S.LargeText>
            {t("Hi, I'm").toLocaleUpperCase()}
            <S.LargeText color={colorTheme.quartiary}>JEAN!</S.LargeText>
          </S.LargeText>

          <TextEffect language={language} />

          <S.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </S.Text>

          <Button onClick={handleDownload}>
            {t('Download CV').toLocaleUpperCase()}
            <BiSolidDownload />
          </Button>
        </S.LeftContent>

        <S.RightContent>
          <Img zIndex={10} src='images/man.png' />
        </S.RightContent>
      </Wrapper>
    </S.Container>
  )
}
