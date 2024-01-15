import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { DrawerBody, DrawerCloseButton, DrawerFooter } from '@chakra-ui/react'
import { Button as ButtonComponent } from '@/components/Button'

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
    background: ${theme.colors.primary};
    position: relative;
  `}
`

export const Footer = styled(DrawerFooter)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    padding-bottom: ${theme.sizes[32]};
    background: ${theme.colors.primary};
  `}
`

export const Button = styled(ButtonComponent)`
  ${({ theme }) => css`
    min-width: 2.8rem;
    height: 2.8rem;
    position: absolute;
    top: ${theme.sizes[32]};
    right: ${theme.sizes[32]};

    svg {
      font-size: ${theme?.sizes[22]};
    }
  `}
`
