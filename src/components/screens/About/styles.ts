import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    z-index: 100;
  `}
`
export const LeftContent = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: column;
    gap: ${theme.sizes[32]};
    z-index: 100;
  `}
`

export const RightContent = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100%;
    justify-content: center;
    align-items: flex-end;
  `}
`
