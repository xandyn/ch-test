import { PropsWithChildren, ReactNode } from 'react'
import cls from 'classnames'
import { Navigation } from '@/components/navigation'
import './style.scss'

type Props = {
  navigationControl?: ReactNode
  footer?: ReactNode
  narrow?: boolean
}

export const Shell = ({
  children,
  navigationControl,
  footer,
  narrow,
}: PropsWithChildren<Props>) => {
  return (
    <div className="shell">
      <Navigation control={navigationControl} />
      <div className={cls('content', { narrow })}>{children}</div>
      <div className="footer">{footer}</div>
    </div>
  )
}
