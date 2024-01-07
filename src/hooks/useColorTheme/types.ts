export type ColorModeProps = 'light' | 'dark'

export enum ColorMode {
  light = 'light',
  dark = 'dark',
}

export type ColorThemeContextProps = {
  colorTheme: any
  onColorMode: (value: ColorModeProps) => void
}
