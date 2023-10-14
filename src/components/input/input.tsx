import { InputHTMLAttributes } from 'react'
import cls from 'classnames'
import './style.scss'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = (props: Props) => {
  const { error, ...rest } = props

  return (
    <div className={cls('input', { error })}>
      <input {...rest} />
      <div className="error">{error}</div>
    </div>
  )
}
