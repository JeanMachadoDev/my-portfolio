import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { MenuList as ChakraMenuList } from '@chakra-ui/react'

import { ConfigModalStylesProps } from './types'

export const MenuList = styled(ChakraMenuList)`
  width: 100px;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border-radius: 0;
  box-shadow: 0rem 2px 4px rgba(0, 0, 0, 0.2);
`

export const Language = styled.div<ConfigModalStylesProps>`
  ${({ selected }) => css`
    width: 100%;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${selected ? '#F0F0F0' : null};
    font-weight: 500;
    cursor: pointer;

    :hover {
      transition: 0.3s;
      background: #f0f0f0;
    }
  `}
`
