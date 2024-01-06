import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    height: 90px;
    background: ${theme.colors.secondary};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  `}
`
export const Content = styled(Flex)`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1500px;
    margin: auto;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Logo = styled(Flex)`
  ${({ theme }) => css`
    font-size: 24px;
    line-height: 24px;
    font-weight: 800;
    color: white;
    cursor: pointer;
  `}
`

export const Nav = styled(Flex)`
  ${({ theme }) => css``}
`

export const Menu = styled(Flex)`
  ${({ theme }) => css`
    svg {
      color: white;
      font-size: 24px;
      cursor: pointer;
    }
  `}
`

export const Text = styled(Flex)`
  ${({ theme, color, fontWeight }) => css`
    font-weight: ${fontWeight || 600};
    color: ${color || '#FFF'};
    align-items: center;
    gap: 4px;
    cursor: pointer;
  `}
`
