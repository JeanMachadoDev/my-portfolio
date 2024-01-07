import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

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
  max-width: 90rem;
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
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
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
