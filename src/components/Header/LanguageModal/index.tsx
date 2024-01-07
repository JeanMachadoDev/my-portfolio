import { Img } from '@chakra-ui/react'

import { useTranslation } from '@/hooks/useTranslation/Context'
import { Languages } from '@/locales/types'
import { theme } from '@/styles/theme'

import * as S from './styles'

export const LanguageModal = () => {
  const { language, changeLanguage, t } = useTranslation()

  return (
    <S.MenuList onClick={(event) => event.stopPropagation()}>
      <S.Language selected={!!(language === Languages.pt)} onClick={() => changeLanguage(Languages.pt)}>
        <Img src='icons/br.png' alt='Portuguese' width={theme.sizes[20]} />
        {t('Portuguese').toLocaleUpperCase()}
      </S.Language>

      <S.Language selected={!!(language === Languages.en)} onClick={() => changeLanguage(Languages.en)}>
        <Img src='icons/eua.png' alt='English' width={theme.sizes[20]} />
        {t('English').toLocaleUpperCase()}
      </S.Language>

      <S.Language selected={!!(language === Languages.es)} onClick={() => changeLanguage(Languages.es)}>
        <Img src='icons/es.png' alt='Spanish' width={theme.sizes[20]} />
        {t('Spanish').toLocaleUpperCase()}
      </S.Language>

      <S.Language selected={!!(language === Languages.fr)} onClick={() => changeLanguage(Languages.fr)}>
        <Img src='icons/fr.png' alt='French' width={theme.sizes[20]} />
        {t('French').toLocaleUpperCase()}
      </S.Language>
    </S.MenuList>
  )
}
