import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Shell } from '@/components/shell'
import { Button } from '@/components/button'
import { Slideshow } from '@/components/slideshow'
import { ContentText } from './components/content-text'
import { onboardingStore } from './store'

import step1 from '@/assets/step1.svg'
import step2 from '@/assets/step2.svg'
import step3 from '@/assets/step3.svg'

export const Onboarding = observer(() => {
  const navigate = useNavigate()
  const { page, direction } = onboardingStore
  const images = [step1, step2, step3]
  const isBackDisabled = page === 0
  const actionButtonTitle = page === images.length - 1 ? 'Done' : 'Next'

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection

    if (newPage >= 0 && newPage < images.length) {
      onboardingStore.setPage(newPage)
      onboardingStore.setDirection(newDirection)
    }
  }

  const onActionClick = () => {
    if (page === images.length - 1) {
      navigate('/signup')
    } else {
      paginate(1)
    }
  }

  const onSkipClick = () => {
    navigate('/signup')
  }

  const navControl = (
    <Button variant="text" onClick={onSkipClick}>
      Skip
    </Button>
  )
  const footer = (
    <>
      <Button variant="secondary" disabled={isBackDisabled} onClick={() => paginate(-1)}>
        Back
      </Button>
      <Button onClick={onActionClick}>{actionButtonTitle}</Button>
    </>
  )

  return (
    <Shell navigationControl={navControl} footer={footer}>
      <Slideshow images={images} page={page} direction={direction} />
      <ContentText page={page} />
    </Shell>
  )
})
