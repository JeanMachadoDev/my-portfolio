import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { TypeAnimation } from 'react-type-animation'

export const Text = styled(TypeAnimation)`
  ${({ theme }) => css`
    font-weight: 800;
    font-size: ${theme.sizes[48]};
    color: ${theme.colors.quintiario};

    @media screen and (max-width: ${theme.screenSizes.small}) {
      font-size: ${theme.sizes[32]};
    }
  `}
`
