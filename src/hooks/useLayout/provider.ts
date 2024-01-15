import { setLocalStorage } from '@/utils/localStorage'

const setDefaultFontSize = () => {
  const root = document.documentElement
  root.style.fontSize = '16px'
  setLocalStorage({ key: 'fontSize', value: '16px' })
}

const setDecreaseFontSize = () => {
  const root = document.documentElement
  const computedFontSize = parseFloat(getComputedStyle(root).fontSize)
  const newLength = computedFontSize - 1
  root.style.fontSize = newLength + 'px'
  setLocalStorage({ key: 'fontSize', value: `${newLength}px` })
}

const setIncreaseFontSize = () => {
  const root = document.documentElement
  const computedFontSize = parseFloat(getComputedStyle(root).fontSize)
  const newLength = computedFontSize + 1
  root.style.fontSize = newLength + 'px'
  setLocalStorage({ key: 'fontSize', value: `${newLength}px` })
}

export { setDefaultFontSize, setDecreaseFontSize, setIncreaseFontSize }
