import styled from '@emotion/styled'
import { Theme, css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

import { HeadingProps } from './types'

type HeadingStylesProps = Pick<HeadingProps, 'size' | 'color'> & {
  theme?: Theme
}

const headingSizeModifiers = {
  small: (theme: Theme) => css`
    font-size: ${theme.sizes[22]};
    line-height: ${theme.sizes[22]};
  `,

  middle: (theme: Theme) => css`
    font-size: ${theme.sizes[32]};
    line-height: ${theme.sizes[32]};
  `,

  large: (theme: Theme) => css`
    font-weight: 800;
    font-size: ${theme.sizes[48]};
    line-height: ${theme.sizes[48]};
    gap: ${theme.sizes[12]};
  `,
}

const headingColorModifiers = {
  default: (theme: Theme) => css`
    color: ${theme.colors.text[800]};
  `,

  blue: (theme: Theme) => css`
    color: ${theme.colors.quintiario};
  `,

  pink: (theme: Theme) => css`
    color: ${theme.colors.quartiary};
  `,
}

export const Heading = styled(Flex)`
  ${({ theme, size, color }: HeadingStylesProps) => css`
    font-weight: 600;
    white-space: nowrap;

    ${!!size && headingSizeModifiers[size](theme!)};
    ${!!color && headingColorModifiers[color](theme!)};
  `}
`
