import PasswordBuilder from '../../../src/main/password-builder'

describe('Password', () => {
  it('Should return the length of the assigned password.', () => {
    const length: number = PasswordBuilder.getPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 15).length
    expect(length).toBe(15)
  })
  it('Should be undefined when the length is zero.', () => {
    const actual: string = PasswordBuilder.getPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 0)
    expect(actual).toBeUndefined()
  })
})

describe('Characters', () => {
  it('Should return a string of lowercase and uppercase characters concatenated.', () => {
    const actual: string = PasswordBuilder.getChar(['all-radio'], ['uppercase', 'lowercase'])
    expect(actual).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
  })
  it('Should return an empty string if the chars option is not selected.', () => {
    const actual: string = PasswordBuilder.getChar(['all-radio'], [])
    expect(actual).toBe('')
  })
  it('Should return a character string of numbers without 0 and 1.', () => {
    const actual: string = PasswordBuilder.getChar(['read-radio'], ['numbers'])
    expect(actual).toBe('23456789')
  })
  it('Should return a string of emojis.', () => {
    const actual: string = PasswordBuilder.getChar(['all-radio'], ['emoji'])
    expect(actual).toBe('😀😍🙁👽🖕🥵🥺🤮')
  })
})