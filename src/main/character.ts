class Character {
  static get uppercase(): string { return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' }
  static get lowercase(): string { return 'abcdefghijklmnopqrstuvwxyz' }
  static get numbers(): string { return '1234567890' }
  static get symbols(): string { return '!@#$%&/=?¡*~^' }
  static get ascii(): string { return 'ƒ¢®■ß½¥©Æ§' }
  static get emoji(): string { return '👻👽🖕🥵🥺🤮😍🙁' }
}

export default Character