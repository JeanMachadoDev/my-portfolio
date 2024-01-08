import { Spinner } from '@chakra-ui/react'

import { useColorTheme } from '@/hooks/useColorTheme/Context'

import * as S from './styles'

export const Loader = () => {
  const { colorTheme } = useColorTheme()

  return (
    <S.Container>
      <Spinner thickness='8px' speed='0.85s' emptyColor={colorTheme.tertiary} color={colorTheme.quartiary} size='xl' />
    </S.Container>
  )
}
