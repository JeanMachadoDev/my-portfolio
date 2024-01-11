import { FlexProps } from '@chakra-ui/react'

export interface HeadingProps extends Omit<FlexProps, 'size' | 'color'> {
  size?: 'small' | 'middle' | 'large'
  color?: 'default' | 'blue' | 'pink'
}
