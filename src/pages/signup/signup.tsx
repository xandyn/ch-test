import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import { Shell } from '@/components/shell'
import { Button, IconButton } from '@/components/button'
import { Form } from './components/form'
import { signupStore } from './store'

export const SignUp = observer(() => {
  const navigate = useNavigate()
  const { email, agreement } = signupStore
  const submitDisabled = !email || !agreement
  const navControl = <IconButton icon="close" onClick={() => navigate('/')} />
  const footer = (
    <Button disabled={submitDisabled} onClick={() => navigate('/signup-done')}>
      Confirm email
    </Button>
  )

  return (
    <Shell navigationControl={navControl} footer={footer} narrow>
      <Form
        email={email}
        agreement={agreement}
        setEmail={signupStore.setEmail}
        setAgreement={signupStore.setAgreement}
      />
    </Shell>
  )
})
