export type ColorModeProps = 'light' | 'dark'

export enum ColorMode {
  light = 'light',
  dark = 'dark',
}

export type ColorThemeContextProps = {
  colorTheme: any
  themeSelected: ColorModeProps
  onColorMode: (value: ColorModeProps) => void
}
