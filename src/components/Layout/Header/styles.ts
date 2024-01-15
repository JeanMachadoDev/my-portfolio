import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'
import { Button as ButtonComponent } from '@/components/Button'

export const Container = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    height: 6rem;
    background: ${theme.colors.primary};
    box-shadow: 0 ${theme.sizes[2]} ${theme.sizes[2]} rgba(0, 0, 0, 0.2);
    z-index: 150;

    @media screen and (max-width: ${theme.screenSizes.large}) {
      position: fixed;
    }
  `}
`

export const Logo = styled(Flex)`
  ${({ theme, color }) => css`
    font-weight: 800;
    font-size: ${theme.sizes[24]};
    line-height: ${theme.sizes[24]};
    color: ${color || theme.colors.text[800]};
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  `}
`

export const Nav = styled(Flex)`
  align-items: center;
`

export const Menu = styled(Flex)`
  ${({ theme }) => css`
    svg {
      font-size: ${theme.sizes[24]};
      color: ${theme.colors.text[800]};
      cursor: pointer;
    }
  `}
`
export const ButtonBox = styled(Flex)`
  ${({ theme }) => css`
    gap: ${theme.sizes[16]};
  `}
`

export const Button = styled(ButtonComponent)`
  ${({ theme }) => css`
    @media screen and (max-width: ${theme?.screenSizes.small}) {
      min-width: 2.8rem;
      height: 2.8rem;
      font-size: ${theme?.sizes[18]};

      svg {
        font-size: ${theme?.sizes[18]};
      }
    }
  `}
`
