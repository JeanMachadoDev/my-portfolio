import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { MenuList as ChakraMenuList, Flex } from '@chakra-ui/react'

import { ConfigModalStylesProps } from './types'

export const MenuList = styled(ChakraMenuList)`
  ${({ theme }) => css`
    max-width: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 0;
    background: ${theme.colors.tertiary};
    box-shadow: 0 ${theme.sizes[2]} ${theme.sizes[4]} rgba(0, 0, 0, 0.2);
  `}
`

export const Language = styled(Flex)<ConfigModalStylesProps>`
  ${({ theme, selected }) => css`
    width: 100%;
    font-weight: 600;
    padding: ${theme.sizes[8]} ${theme.sizes[16]};
    align-items: center;
    gap: ${theme.sizes[8]};
    color: ${theme.colors.text[800]};
    background: ${selected ? 'rgba(0, 0, 0, 0.1)' : null};
    cursor: pointer;

    &:hover {
      transition: all ease 0.3s;
      background: rgba(0, 0, 0, 0.1);
    }
  `}
`
