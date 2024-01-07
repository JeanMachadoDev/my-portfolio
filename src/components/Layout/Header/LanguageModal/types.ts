export type ConfigModalStylesProps = {
  selected?: boolean
  open?: boolean
}

export type ConfigModalProps = ConfigModalStylesProps & {
  onClose?: () => void
}
