import { Spinner } from '@chakra-ui/react'

import * as S from './styles'

export const Loader = () => {
  return (
    <S.Container>
      <Spinner thickness='8px' speed='0.85s' emptyColor='yellow.300' color='#0055a2' size='xl' />
    </S.Container>
  )
}
