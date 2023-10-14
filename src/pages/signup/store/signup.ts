import { makeAutoObservable } from 'mobx'

class Signup {
  email: string
  agreement: boolean

  constructor() {
    makeAutoObservable(this)

    this.email = ''
    this.agreement = false
  }

  setEmail = (email: string) => {
    this.email = email
  }

  setAgreement = (agreement: boolean) => {
    this.agreement = agreement
  }
}

export const signupStore = new Signup()
