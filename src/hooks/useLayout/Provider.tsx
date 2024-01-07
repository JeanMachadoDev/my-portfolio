import { useCallback, useState } from 'react'

import { LayoutContext } from './Context'
import { setLocalStorage } from '@/utils/localStorage'

import { ReactChildrenProps } from '@/utils/globalTypes/types'

export const LayoutProvider = ({ children }: ReactChildrenProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onIsMenuOpen = useCallback((value: boolean) => setIsMenuOpen(value), [])

  const onDefaultFontSize = useCallback(() => {
    const root = document.documentElement
    root.style.fontSize = '16px'
    setLocalStorage({ key: 'fontSize', value: '16px' })
  }, [])

  const onDecreaseFontSize = useCallback(() => {
    const root = document.documentElement
    const computedFontSize = parseFloat(getComputedStyle(root).fontSize)
    const newLength = computedFontSize - 1
    root.style.fontSize = newLength + 'px'
    setLocalStorage({ key: 'fontSize', value: `${newLength}px` })
  }, [])

  const onIncreaseFontSize = useCallback(() => {
    const root = document.documentElement
    const computedFontSize = parseFloat(getComputedStyle(root).fontSize)
    const newLength = computedFontSize + 1
    root.style.fontSize = newLength + 'px'
    setLocalStorage({ key: 'fontSize', value: `${newLength}px` })
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        isMenuOpen,
        onIsMenuOpen,
        onDefaultFontSize,
        onDecreaseFontSize,
        onIncreaseFontSize,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
