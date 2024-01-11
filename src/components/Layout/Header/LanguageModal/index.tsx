import { Img } from '@chakra-ui/react'

import { useTranslation } from '@/hooks/useTranslation/Context'
import { Languages } from '@/locales/types'
import { theme } from '@/hooks/useChakraTheme/theme'
import { Button } from '@/components/Button'

import * as S from './styles'

export const LanguageModal = () => {
  const { changeLanguage, t } = useTranslation()

  return (
    <S.MenuList onClick={(event) => event.stopPropagation()}>
      <Button width='100%' justifyContent='flex-start' onClick={() => changeLanguage(Languages.pt)}>
        <Img src='icons/br.png' alt='Portuguese' width={theme.sizes[20]} />
        {t('Portuguese').toLocaleUpperCase()}
      </Button>

      <Button width='100%' justifyContent='flex-start' onClick={() => changeLanguage(Languages.en)}>
        <Img src='icons/eua.png' alt='English' width={theme.sizes[20]} />
        {t('English').toLocaleUpperCase()}
      </Button>

      <Button width='100%' justifyContent='flex-start' onClick={() => changeLanguage(Languages.es)}>
        <Img src='icons/es.png' alt='Spanish' width={theme.sizes[20]} />
        {t('Spanish').toLocaleUpperCase()}
      </Button>

      <Button width='100%' justifyContent='flex-start' onClick={() => changeLanguage(Languages.fr)}>
        <Img src='icons/fr.png' alt='French' width={theme.sizes[20]} />
        {t('French').toLocaleUpperCase()}
      </Button>
    </S.MenuList>
  )
}
