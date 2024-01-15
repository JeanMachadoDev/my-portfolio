import { create } from 'zustand'
import { setDecreaseFontSize, setDefaultFontSize, setIncreaseFontSize } from './provider'
import { LayoutContextProps } from './types'

export const useLayout = create<LayoutContextProps>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (value: boolean) => set({ isMenuOpen: value }),

  setDecreaseFontSize,
  setDefaultFontSize,
  setIncreaseFontSize,
}))
