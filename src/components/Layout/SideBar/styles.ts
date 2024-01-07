import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { DrawerBody, DrawerCloseButton, DrawerFooter } from '@chakra-ui/react'

export const CloseButtom = styled(DrawerCloseButton)`
  ${({ theme }) => css`
    top: 2.75rem;
    right: ${theme.sizes[32]};
    font-size: ${theme.sizes[16]};
  `}
`

export const Content = styled(DrawerBody)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.sizes[32]};
    background: ${theme.colors.secondary};
  `}
`

export const Footer = styled(DrawerFooter)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary};
  `}
`
