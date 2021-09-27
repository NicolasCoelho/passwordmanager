export interface Data {
  user: {
    name: String
    passwordHash: String
  },
  preferences: {
    firstTime: boolean
    lang: Number
  }
  passwords: Array<any>
}
