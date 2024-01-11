import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { MenuList as ChakraMenuList } from '@chakra-ui/react'

export const MenuList = styled(ChakraMenuList)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border: none;
    padding: ${theme.sizes[16]};
    border-radius: ${theme.sizes[4]};
    background: ${theme.colors.tertiary};
    box-shadow: ${theme?.sizes[4]} ${theme?.sizes[4]} ${theme?.sizes[8]} rgba(0, 0, 0, 0.2);
  `}
`
