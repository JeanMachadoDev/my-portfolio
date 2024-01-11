import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

export interface ButtonProps extends Omit<ChakraButtonProps, 'size'> {
  size?: 'small' | 'middle' | 'large'
}
