import { makeAutoObservable } from 'mobx'

class Onboarding {
  page: number
  direction: number

  constructor() {
    makeAutoObservable(this)

    this.page = 0
    this.direction = 0
  }

  setPage = (page: number) => {
    this.page = page
  }

  setDirection = (direction: number) => {
    this.direction = direction
  }
}

export const onboardingStore = new Onboarding()
