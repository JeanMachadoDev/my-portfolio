import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  flex-direction: column;
`

export const Content = styled(Flex)`
  width: 100%;
  flex-direction: column;
  height: calc(100vh - 6rem);
  overflow-y: auto;

  @media screen and (max-width: 1080px) {
    height: 100%;
  }
`
