import { useCallback, useState } from 'react'

import { LayoutContext } from './Context'
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'

import { ReactChildrenProps } from '@/utils/globalTypes/types'

export const LayoutProvider = ({ children }: ReactChildrenProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onIsMenuOpen = useCallback((value: boolean) => setIsMenuOpen(value), [])

  return (
    <LayoutContext.Provider
      value={{
        isMenuOpen,
        onIsMenuOpen,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
