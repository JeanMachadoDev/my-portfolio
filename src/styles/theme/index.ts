import { theme as chakraTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = {
  ...chakraTheme,
  config,
  colors: {
    ...chakraTheme.colors,
  },
  sizes: {
    1: '0.0667rem',
    2: '0.1333rem',
    3: '0.2rem',
    4: '0.2667rem',
    5: '0.3333rem',
    6: '0.4rem',
    8: '0.5333rem',
    10: '0.6667rem',
    11: '0.7333rem',
    12: '0.8rem',
    13: '0.8667rem',
    14: '0.9333rem',
    15: '1rem',
    16: '1.0667rem',
    18: '1.2rem',
    19: '1.2667rem',
    20: '1.3333rem',
    22: '1.4667rem',
    24: '1.6rem',
    26: '1.7333rem',
    28: '1.8667rem',
    30: '2rem',
    32: '2.1333rem',
    48: '3.2rem',
    64: '4.2667rem',
  },
}
