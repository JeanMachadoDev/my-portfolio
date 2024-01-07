import { ColorMode, ColorModeProps } from '../types'

export const getColors = (theme: ColorModeProps) => ({
  primary: theme === ColorMode.dark ? '#10161F' : '#E0E0E0',
  secondary: theme === ColorMode.dark ? '#141c27' : '#EDEDED',
  tertiary: theme === ColorMode.dark ? '#1C293B' : '#FFF',
  text: theme === ColorMode.dark ? '#EEEEEE' : '#1D1D1D',
  textPink: '#F231A5',
  border: theme === ColorMode.dark ? '#1C293B' : '#CACACA',
})
