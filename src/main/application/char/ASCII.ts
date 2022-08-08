import Characters from './Characters';

class ASCII implements Characters {
  public formString(): string {
    let character: string = '';

    for (let i = 128; i <= 254; i++) {
      character = character.concat(String.fromCharCode(i));
    }

    return character;
  }
}

export default ASCII;
