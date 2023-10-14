import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import { signupStore } from '@/pages/signup/store'
import { Shell } from '@/components/shell'
import { Button } from '@/components/button'
import paperPlane from '@/assets/paper-plane.svg'
import './style.scss'

export const SignUpDone = observer(() => {
  const { email } = signupStore
  const navigate = useNavigate()

  return (
    <Shell narrow>
      <div className="signup-done">
        <img src={paperPlane} alt="paper plane" />
        <h1>You’re Ready to Go!</h1>
        <p>
          A verification email has been sent to: <br /> <b>{email}</b>
        </p>
        <Button onClick={() => navigate('/')}>Get started!</Button>
      </div>
    </Shell>
  )
})
