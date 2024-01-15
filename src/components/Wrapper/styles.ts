import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'
import { css } from '@emotion/react'

import { WrapperProps } from './types'

type ContainerStylesProps = Pick<WrapperProps, 'isResponsive'>

export const Container = styled(Flex)<ContainerStylesProps>`
  ${({ theme, isResponsive }) => css`
    width: 100%;
    height: 100%;
    max-width: 90rem;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.sizes[64]};
    padding: 0 ${theme.sizes[64]} 0 ${theme.sizes[64]};

    ${isResponsive &&
    css`
      @media screen and (max-width: ${theme.screenSizes.large}) {
        flex-direction: column;
      }

      @media screen and (max-width: ${theme.screenSizes.middle}) {
        flex-direction: column;
        padding: 0 ${theme.sizes[32]} 0 ${theme.sizes[32]};
      }
    `}

    @media screen and (max-width: ${theme.screenSizes.middle}) {
      gap: ${theme.sizes[32]};
      padding: 0 ${theme.sizes[32]} 0 ${theme.sizes[32]};
    }
  `}
`
