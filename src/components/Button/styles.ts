import styled from '@emotion/styled'
import { css, Theme } from '@emotion/react'
import { Button } from '@chakra-ui/react'

import { ButtonProps } from './types'

type ButtonStylesProps = Pick<ButtonProps, 'size' | 'width'> & {
  theme?: Theme
}

const buttonSizeModifiers = {
  small: (theme: Theme) => css`
    padding: ${theme.sizes[12]};
  `,

  middle: (theme: Theme) => css`
    padding: ${theme.sizes[24]};
  `,

  large: (theme: Theme) => css`
    padding: ${theme.sizes[48]};
  `,
}

export const Container = styled(Button)`
  ${({ theme, width, size }: ButtonStylesProps) => css`
    width: ${width || 'min-content'};
    min-width: 3.4667rem;
    border-radius: 0;
    color: ${theme?.colors.quintiario};
    font-weight: 700;
    font-size: ${theme?.sizes[20]};
    border-radius: ${theme?.sizes[4]};
    transition: all ease 0.3s;
    gap: ${theme?.sizes[16]};
    display: flex;
    background: linear-gradient(145deg, ${theme?.colors.secondary}, ${theme?.colors.tertiary});
    box-shadow:
      ${theme?.sizes[4]} ${theme?.sizes[4]} ${theme?.sizes[8]} rgba(0, 0, 0, 0.2),
      -${theme?.sizes[4]} -${theme?.sizes[4]} ${theme?.sizes[8]} ${theme?.colors.component.bgButton};

    &:hover {
      background: linear-gradient(145deg, ${theme?.colors.secondary}, ${theme?.colors.tertiary});
      filter: brightness(0.95);
    }

    svg {
      font-size: ${theme?.sizes[24]};
    }

    ${!!size && buttonSizeModifiers[size](theme!)};
  `}
`
