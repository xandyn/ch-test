import { ButtonHTMLAttributes } from 'react'
import close from '@/assets/icons/close.svg'
import checkbox from '@/assets/icons/checkbox.svg'
import checkboxChecked from '@/assets/icons/checkbox-checked.svg'
import './style.scss'

const ICON_MAP = {
  close,
  checkbox,
  checkboxChecked,
} as const

type Icon = keyof typeof ICON_MAP

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: Icon
}

export const IconButton = (props: Props) => {
  const { icon, ...rest } = props

  return (
    <button {...rest} className="icon-button">
      <img src={ICON_MAP[icon]} alt={icon} />
    </button>
  )
}
