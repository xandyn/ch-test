import { PropsWithChildren, ButtonHTMLAttributes } from 'react'
import cls from 'classnames'
import './style.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'invert' | 'text'
}

export const Button = (props: PropsWithChildren<Props>) => {
  const { children, variant = 'primary', ...rest } = props
  const className = cls({
    'button-primary': variant === 'primary',
    'button-secondary': variant === 'secondary',
    'button-invert': variant === 'invert',
    'button-text': variant === 'text',
  })

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  )
}
