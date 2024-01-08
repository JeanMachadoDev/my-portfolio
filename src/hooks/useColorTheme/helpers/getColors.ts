import { ColorMode, ColorModeProps } from '../types'

export const getColors = (theme: ColorModeProps) => ({
  primary: theme === ColorMode.dark ? '#10161F' : '#E0E0E0',
  secondary: theme === ColorMode.dark ? '#141c27' : '#EDEDED',
  tertiary: theme === ColorMode.dark ? '#1C293B' : '#FFF',
  quartiary: theme === ColorMode.dark ? '#F231A5' : '#CF3E95',
  quintiario: theme === ColorMode.dark ? '#319AF2' : '#3C76CB',
  border: theme === ColorMode.dark ? '#1C293B' : '#CACACA',
  text: {
    500: theme === ColorMode.dark ? '#A4A4A4' : '#444444',
    800: theme === ColorMode.dark ? '#EEEEEE' : '#1D1D1D',
  },
})
