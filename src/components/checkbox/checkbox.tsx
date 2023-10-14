import { InputHTMLAttributes } from 'react'
import './style.scss'
import { IconButton } from '@/components/button'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'onClick' | 'value'> & {
  value: boolean
  onClick(value: boolean): void
}

export const Checkbox = ({ value, onClick, ...rest }: Props) => {
  const onChange = () => {
    onClick(!value)
  }

  return (
    <div className="checkbox">
      <IconButton icon={value ? 'checkboxChecked' : 'checkbox'} onClick={onChange} />
      <input {...rest} type="checkbox" checked={value} onChange={onChange} />
    </div>
  )
}
