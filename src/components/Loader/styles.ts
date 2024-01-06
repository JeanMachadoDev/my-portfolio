import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.secondary};
  `}
`
