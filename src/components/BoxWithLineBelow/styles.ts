import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

export const Text = styled(Flex)`
  ${({ theme, color, fontSize, fontWeight }) => css`
    height: min-content;
    font-weight: ${fontWeight || 700};
    font-size: ${fontSize || theme.sizes[16]};
    color: ${color || theme.colors.text[800]};
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
      background: ${theme.colors.quartiary};
      bottom: -${theme.sizes[4]};
      transition: all 0.2s;
      transform: scaleX(0);
    }

    &:hover::after {
      transform: scaleX(1);
    }
  `}
`
