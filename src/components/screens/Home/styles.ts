import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 96px);
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
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

export const LargeText = styled(Flex)`
  ${({ theme, color }) => css`
    font-weight: 800;
    font-size: ${theme.sizes[48]};
    line-height: ${theme.sizes[48]};
    gap: ${theme.sizes[16]};
    color: ${color || theme.colors.text[800]};
  `}
`

export const Text = styled(Flex)`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: ${theme.sizes[16]};
    color: ${theme.colors.text[500]};
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
