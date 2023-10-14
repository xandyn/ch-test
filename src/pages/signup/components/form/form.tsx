import { Input } from '@/components/input'
import { Agreement } from '../agreement'
import './style.scss'

type Props = {
  email: string
  agreement: boolean
  setEmail(email: string): void
  setAgreement(agreement: boolean): void
}

export const Form = (props: Props) => {
  const { email, agreement, setEmail, setAgreement } = props

  return (
    <div className="form">
      <h1>Set up your email</h1>
      <p>Where should we send the alerts?</p>
      <Input
        placeholder="Enter your email address"
        autoFocus
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Agreement value={agreement} setValue={setAgreement} />
    </div>
  )
}
