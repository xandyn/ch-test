import { Checkbox } from '@/components/checkbox'
import './style.scss'

type Props = {
  value: boolean
  setValue(value: boolean): void
}

export const Agreement = ({ value, setValue }: Props) => {
  return (
    <div className="agreement">
      <Checkbox value={value} onClick={setValue} />
      <span>
        I agree to the <a>Terms of service</a> and <a>Privacy policy</a>
      </span>
    </div>
  )
}
