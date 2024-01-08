import { TextEffectProps } from './types'

import * as S from './styles'

export const TextEffect = ({ language }: TextEffectProps) => {
  const languages = {
    'en-US': ['CODER', 1500, 'WEB DEVELOPER', 1500, 'PROGRAMMER', 1500],
    'es-ES': ['DESCIFRADOR', 1500, 'DESARROLLADOR WEB', 1500, 'PROGRAMADOR', 1500],
    'pt-BR': ['CODIFICADOR', 1500, 'DESENVOLVEDOR WEB', 1500, 'PROGRAMADOR', 1500],
    'fr-FR': ['CODEUR', 1500, 'DÉVELOPPEUR WEB', 1500, 'PROGRAMMEUR', 1500],
  }
  return (
    <>
      {language === 'en-US' && <S.Text sequence={languages[language]} speed={40} repeat={Infinity} />}
      {language === 'es-ES' && <S.Text sequence={languages[language]} speed={40} repeat={Infinity} />}
      {language === 'pt-BR' && <S.Text sequence={languages[language]} speed={40} repeat={Infinity} />}
      {language === 'fr-FR' && <S.Text sequence={languages[language]} speed={40} repeat={Infinity} />}
    </>
  )
}
