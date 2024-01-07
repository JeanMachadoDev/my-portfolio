import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex, MenuButton as MenuButtonChakra } from '@chakra-ui/react'

export const Container = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    height: 6rem;
    background: ${theme.colors.secondary};
    box-shadow: 0 ${theme.sizes[2]} ${theme.sizes[2]} rgba(0, 0, 0, 0.2);
  `}
`
export const Content = styled(Flex)`
  width: 100%;
  max-width: 100rem;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(Flex)`
  ${({ theme, color }) => css`
    font-weight: 800;
    font-size: ${theme.sizes[24]};
    line-height: ${theme.sizes[24]};
    color: ${color || theme.colors.text};
    cursor: pointer;
  `}
`

export const Nav = styled(Flex)``

export const Menu = styled(Flex)`
  ${({ theme }) => css`
    svg {
      font-size: ${theme.sizes[24]};
      color: ${theme.colors.text};
      cursor: pointer;
    }
  `}
`

export const Text = styled(Flex)`
  ${({ theme, color, fontWeight }) => css`
    font-weight: ${fontWeight || 700};
    color: ${color || theme.colors.text};
    align-items: center;
    gap: ${theme.sizes[4]};
    position: relative;
    cursor: pointer;

    &:hover {
      transition: all ease 0.3s;
      filter: brightness(1);
    }

    &::after {
      content: '';
      position: absolute;
      height: ${theme.sizes[3]};
      width: 100%;
      background: ${theme.colors.textPink};
      bottom: -${theme.sizes[4]};
      transition: all 0.2s;
      transform: scaleX(0);
    }

    &:hover::after {
      transform: scaleX(1);
    }
  `}
`
