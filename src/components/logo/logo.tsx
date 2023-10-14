import brandLogo from '@/assets/logo.svg'
import './style.scss'

export const Logo = () => (
  <div className="logo">
    <img src={brandLogo} alt="brand logo" />
    <span className="catch">catch</span>
    <span className="hotels">hotels</span>
  </div>
)
