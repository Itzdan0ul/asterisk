import Characters from '../../../src/main/application/char/Characters';
import CharacterStringBuilder from '../../../src/main/application/char/CharacterStringBuilder';

describe('CharacterStringBuilder', () => {
  it('should return a string with lowercase characters and numbers without 0 and 1.', () => {
    const characters: Array<Characters> = new CharacterStringBuilder(
      ['Easy to read'],
      ['Lowercase', 'Numbers']
    ).makeStringCharacters();
    let charString: string = '';

    for (let character of characters) {
      charString = charString.concat(character.formString());
    }

    expect(charString).toBe('abcdefghijkmnopqrstuvwxyz23456789');
  });

  it('should return a string with characters in uppercase, lowercase, numbers and symbols.', () => {
    const characters: Array<Characters> = new CharacterStringBuilder(
      ['All characters'],
      ['Lowercase', 'Numbers', 'Uppercase', 'Symbols']
    ).makeStringCharacters();
    let charString: string = '';

    for (let character of characters) {
      charString = charString.concat(character.formString());
    }

    expect(charString).toBe(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&/=?¡*~^'
    );
  });
});
