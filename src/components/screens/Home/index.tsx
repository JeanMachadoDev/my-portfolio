import { Img } from '@chakra-ui/react'

import { useColorTheme } from '@/hooks/useColorTheme/Context'
import { useTranslation } from '@/hooks/useTranslation/Context'
import { downloadCv } from '@/utils/functions/downloadCv'

import { Particle } from '@/components/Particle'
import { Wrapper } from '@/components/Wrapper'
import { TextEffect } from '@/components/TextEffect'
import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Heading } from '@/components/Heading'

import { BiSolidDownload } from 'react-icons/bi'

import * as S from './styles'

export const Home = () => {
  const { language, t } = useTranslation()
  const { colorTheme } = useColorTheme()

  const handleDownload = () => downloadCv()

  return (
    <S.Container>
      <Particle />

      <Wrapper>
        <S.LeftContent>
          <Heading size='large'>
            {t("Hi, I'm").toLocaleUpperCase()}
            <Heading size='large' color='pink'>
              JEAN!
            </Heading>
          </Heading>

          <TextEffect language={language} />

          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>

          <Button size='middle' onClick={handleDownload}>
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
