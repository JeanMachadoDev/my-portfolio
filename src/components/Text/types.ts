import { FlexProps } from '@chakra-ui/react'

export interface TextProps extends Omit<FlexProps, 'size'> {
  size?: 'small' | 'middle' | 'large'
}
