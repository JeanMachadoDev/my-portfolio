import { useTranslation } from '@/hooks/useTranslation/Context'
import { downloadCv } from '@/utils/functions/downloadCv'

import { Wrapper } from '@/components/Wrapper'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Frame } from '@/components/Frame'
import { Img } from '@chakra-ui/react'

import { BiSolidDownload } from 'react-icons/bi'

import * as S from './styles'

export const About = () => {
  const { t } = useTranslation()

  const handleDownload = () => downloadCv()

  return (
    <S.Container id='about'>
      <Wrapper>
        <S.RightContent>
          <Frame>
            <Img zIndex={10} src='images/man.png' />
          </Frame>
        </S.RightContent>

        <S.LeftContent>
          <Heading color='blue'>{t('About me').toLocaleUpperCase()}</Heading>

          <Heading size='large'>
            {t('Transforming')}
            <Heading size='large' color='pink'>
              {t('Visions')}
            </Heading>
          </Heading>

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
      </Wrapper>
    </S.Container>
  )
}
