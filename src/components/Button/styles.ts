import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Button } from '@chakra-ui/react'

export const Container = styled(Button)`
  ${({ theme }) => css`
    width: min-content;
    border-radius: 0;
    color: black;
    font-weight: 700;
    font-size: ${theme.sizes[20]};
    padding: ${theme.sizes[28]};
    background: ${theme.colors.quintiario};
    transition: all ease 0.3s;
    gap: ${theme.sizes[16]};

    &:hover {
      background: ${theme.colors.quartiary};
    }

    svg {
      font-size: ${theme.sizes[24]};
    }
  `}
`
