class Character {
  static get uppercase(): string { return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' }
  static get lowercase(): string { return 'abcdefghijklmnopqrstuvwxyz' }
  static get numbers(): string { return '1234567890' }
  static get symbols(): string { return '!@#$%&/=?¡*~^' }
  static get ascii(): string { return 'ƒ¢®■ß½¥©Æ§' }
  static get emoji(): string[] { return ['1F47B', '1F47D', '1F595', '1F975', '1F97A', '1F92E', '1F60D', '1F641'] }
}

export default Character