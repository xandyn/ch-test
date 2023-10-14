import { ReactNode } from 'react'
import { Logo } from '@/components/logo'
import './style.scss'

type Props = {
  control?: ReactNode
}

export const Navigation = ({ control }: Props) => {
  return (
    <div className="navigation">
      <Logo />
      {control}
    </div>
  )
}
