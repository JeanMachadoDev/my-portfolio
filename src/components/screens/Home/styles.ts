import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 6.4rem);
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};

    @media screen and (max-width: ${theme.screenSizes.middle}) {
      height: 100%;
      min-height: 100%;
      padding-top: calc(${theme.sizes[64]} + 96px);
      padding-bottom: ${theme.sizes[64]};
    }
  `}
`

export const LeftContent = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: column;
    gap: ${theme.sizes[32]};
    z-index: 100;

    @media screen and (max-width: ${theme.screenSizes.large}) {
      gap: ${theme.sizes[16]};
    }
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

export const RightContent = styled(Flex)`
  width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`
