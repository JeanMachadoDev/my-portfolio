import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    height: 36.6667rem;
    position: relative;
    justify-content: center;
    margin-top: 3.3333rem;

    @media screen and (max-width: ${theme.screenSizes.large}) {
      height: 26.6667rem;
      margin-top: 8rem;
    }
  `}
`

export const FrontBox = styled(Flex)`
  ${({ theme }) => css`
    width: calc(100% - 3.3333rem);
    height: 33.3333rem;
    border-radius: ${theme?.sizes[4]};
    background: linear-gradient(145deg, ${theme?.colors.secondary}, ${theme?.colors.tertiary});
    box-shadow:
      ${theme?.sizes[4]} ${theme?.sizes[4]} ${theme?.sizes[8]} rgba(0, 0, 0, 0.2),
      -${theme?.sizes[4]} -${theme?.sizes[4]} ${theme?.sizes[8]} ${theme?.colors.component.bgButton};
    position: absolute;
    bottom: 0;
    left: 0;

    @media screen and (max-width: ${theme.screenSizes.large}) {
      height: 23.3333rem;
    }
  `}
`

export const BackBox = styled(Flex)`
  ${({ theme }) => css`
    width: calc(100% - 3.3333rem);
    height: 33.3333rem;
    border-radius: ${theme?.sizes[4]};
    background: linear-gradient(145deg, ${theme?.colors.secondary}, ${theme?.colors.tertiary});
    box-shadow:
      ${theme?.sizes[4]} ${theme?.sizes[4]} ${theme?.sizes[8]} rgba(0, 0, 0, 0.2),
      -${theme?.sizes[4]} -${theme?.sizes[4]} ${theme?.sizes[8]} ${theme?.colors.component.bgButton};
    position: absolute;
    top: 0;
    right: 0;

    @media screen and (max-width: ${theme.screenSizes.large}) {
      height: 23.3333rem;
    }
  `}
`

export const Image = styled(Flex)`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    margin-right: 3.3333rem;

    img {
      height: 40rem;

      @media screen and (max-width: ${theme.screenSizes.large}) {
        height: 33.3333rem;
      }

      @media screen and (max-width: ${theme.screenSizes.small}) {
        height: 30rem;
      }
    }

    @media screen and (max-width: ${theme.screenSizes.large}) {
      margin-right: 0px;
    }
  `}
`
