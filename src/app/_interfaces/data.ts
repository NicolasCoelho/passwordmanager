export interface Data {
  user: {
    name: string
    passwordHash: string
  },
  preferences: {
    firstTime: boolean
    lang: string
  }
  passwords: Array<any>
}
