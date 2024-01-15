import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 6rem);
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    z-index: 100;
    gap: ${theme.sizes[32]};
  `}
`
export const LeftContent = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: column;
    gap: ${theme.sizes[32]};
    z-index: 100;

    @media screen and (max-width: ${theme.screenSizes.large}) {
      min-height: calc(100vh - 6rem);
      justify-content: center;
    }
  `}
`

export const RightContent = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${theme.screenSizes.large}) {
      display: none;
    }
  `}
`
