import ASCII from './ASCII';
import Symbols from './Symbols';
import Numbers from './Numbers';
import Uppercase from './Uppercase';
import Lowercase from './Lowercase';
import Characters from './Characters';

class CharacterStringBuilder {
  constructor(private readonly radios: string[], private readonly checkboxes: string[]) {}

  public makeStringCharacters(): Array<Characters> {
    const checkeds: number = this.checkboxes.length;

    switch (checkeds) {
      case 0:
        return [];
      default:
        return this.getCharacters();
    }
  }

  private getCharacters(): Array<Characters> {
    const characters: Array<Characters> = [];

    if (this.checkboxes.includes('Uppercase')) {
      if (this.radios.includes('Easy to read')) {
        characters.push(new Uppercase('ABCDEFGHIJKLMNPQRSTUVWXYZ'));
      } else {
        characters.push(new Uppercase('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
      }
    }

    if (this.checkboxes.includes('Lowercase')) {
      if (this.radios.includes('Easy to read')) {
        characters.push(new Lowercase('abcdefghijkmnopqrstuvwxyz'));
      } else {
        characters.push(new Lowercase('abcdefghijklmnopqrstuvwxyz'));
      }
    }

    if (this.checkboxes.includes('Numbers')) {
      if (this.radios.includes('Easy to read')) {
        characters.push(new Numbers('23456789'));
      } else {
        characters.push(new Numbers('1234567890'));
      }
    }

    if (this.checkboxes.includes('Symbols')) {
      characters.push(new Symbols('!@#$%&/=?¡*~^'));
    }

    if (this.checkboxes.includes('Ascii')) {
      characters.push(new ASCII());
    }

    return characters;
  }
}

export default CharacterStringBuilder;
