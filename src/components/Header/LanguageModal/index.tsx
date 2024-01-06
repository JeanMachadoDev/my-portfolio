import { Img } from '@chakra-ui/react'

import { useTranslation } from '@/hooks/useTranslation/Context'
import { Languages } from '@/i18n/locales/types'

import * as S from './styles'

export const LanguageModal = () => {
  const { language, changeLanguage, t } = useTranslation()

  return (
    <S.MenuList onClick={(event) => event.stopPropagation()}>
      <S.Language selected={!!(language === Languages.pt)} onClick={() => changeLanguage(Languages.pt)}>
        <Img src='icons/br.png' alt='Brasil' width={6} />
        {t('Português')}
      </S.Language>

      <S.Language selected={!!(language === Languages.en)} onClick={() => changeLanguage(Languages.en)}>
        <Img src='icons/eua.png' alt='Brasil' width={6} />
        {t('Inglês')}
      </S.Language>

      <S.Language selected={!!(language === Languages.es)} onClick={() => changeLanguage(Languages.es)}>
        <Img src='icons/es.png' alt='Brasil' width={6} />
        {t('Espanhol')}
      </S.Language>
    </S.MenuList>
  )
}
