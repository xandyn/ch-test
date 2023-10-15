import { makeAutoObservable } from 'mobx'

class Onboarding {
  page: number
  direction: number

  constructor() {
    makeAutoObservable(this)

    this.page = 0
    this.direction = 0
  }

  setState = (page: number, direction: number) => {
    this.page = page
    this.direction = direction
  }

  resetState = () => {
    this.page = 0
    this.direction = 0
  }
}

export const onboardingStore = new Onboarding()
