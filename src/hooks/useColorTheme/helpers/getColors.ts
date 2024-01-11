import { ColorMode, ColorModeProps } from '../types'

export const getColors = (theme: ColorModeProps) => ({
  primary: theme === ColorMode.dark ? '#1D2734' : '#F6F6F6',
  secondary: theme === ColorMode.dark ? '#1a222e' : '#e2e8ec',
  tertiary: theme === ColorMode.dark ? '#222e3e' : '#FFF',
  quartiary: theme === ColorMode.dark ? '#F231A5' : '#CF3E95',
  quintiario: theme === ColorMode.dark ? '#4DAFBD' : '#3B808A',
  border: theme === ColorMode.dark ? '#1C293B' : '#CACACA',
  text: {
    500: theme === ColorMode.dark ? '#A4A4A4' : '#444444',
    800: theme === ColorMode.dark ? '#EEEEEE' : '#1D1D1D',
  },
  component: {
    bgButton: theme === ColorMode.dark ? '#1D2734' : '#FFF',
  },
})
