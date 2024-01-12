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

    @media screen and (max-width: ${theme.screenSizes.large}) {
      min-height: 100%;
      padding-top: ${theme.sizes[64]};
      padding-bottom: ${theme.sizes[64]};
    }

    @media screen and (max-width: ${theme.screenSizes.middle}) {
      height: 100%;
      min-height: 100%;
      padding-top: calc(${theme.sizes[64]});
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
  `}
`

export const RightContent = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${theme.screenSizes.middle}) {
      display: none;
    }
  `}
`
