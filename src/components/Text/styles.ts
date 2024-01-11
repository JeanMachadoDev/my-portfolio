import styled from '@emotion/styled'
import { Theme, css } from '@emotion/react'
import { Flex } from '@chakra-ui/react'

import { TextProps } from './types'

type TextStylesProps = Pick<TextProps, 'size'> & {
  theme?: Theme
}

const textSizeModifiers = {
  small: (theme: Theme) => css`
    font-size: ${theme.sizes[18]};
  `,

  middle: (theme: Theme) => css`
    font-size: ${theme.sizes[22]};
  `,

  large: (theme: Theme) => css`
    font-size: ${theme.sizes[32]};
  `,
}

export const Text = styled(Flex)`
  ${({ theme, size }: TextStylesProps) => css`
    font-weight: 500;
    color: ${theme?.colors.text[500]};

    ${!!size && textSizeModifiers[size](theme!)};
  `}
`
