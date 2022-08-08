import Character from './char/Characters';

class PasswordBuilder {
  constructor(
    private readonly characters: Array<Character>,
    private readonly range: number
  ) {}

  public buildPassword(): string {
    let charString: string = '';
    let password: string = '';

    for (let char of this.characters) {
      charString = charString.concat(char.formString());
    }

    for (let i = 0; i < this.range; i++) {
      password = password.concat(
        charString.charAt(Math.floor(Math.random() * charString.length))
      );
    }

    return password;
  }
}

export default PasswordBuilder;
