import { Character } from './Characters';

class PasswordBuilder {
  public static getPassword(characters: string, length: number): string | undefined {
    let unitedChar: string = '';

    if (length === 0) return undefined;
    if (characters === '') return undefined;

    for (let i = 0; i < length; i++) {
      unitedChar += String.fromCodePoint(
        characters.codePointAt(Math.floor(Math.random() * characters.length))!);
    }

    return unitedChar;
  }

  public static generate(radioGroup: Array<string>, charOption: Array<string>): string {
    const count: number = charOption.length;
    switch (count) {
      case 0:
        return ''
      default: 
        return this.getChar(radioGroup, charOption);
    }
  }

  public static getChar(radioGroup: Array<string>, charOption: Array<string>): string {
    let characters: string = ''

    if (charOption.includes('uppercase')) {
      if (radioGroup.includes('easy to read')) {
        characters = characters.concat(Character.uppercase.replace('O', ''));
      } else {
        characters = characters.concat(Character.uppercase);
      }
    }

    if (charOption.includes('lowercase')) {
      if (radioGroup.includes('easy to read')) {
        characters = characters.concat(Character.lowercase.replace('l', ''));
      } else {
        characters = characters.concat(Character.lowercase);
      }
    }

    if (charOption.includes('numbers')) {
      if (radioGroup.includes('easy to read')) {
        const newValue = Character.numbers.replaceAll(/[10]/g, '')
        characters = characters.concat(newValue);
      } else {
        characters = characters.concat(Character.numbers);
      }
    }

    if (charOption.includes('emoji')) { 
      Character.emoji.forEach(code => {
        const unicode: number = parseInt('0x' + code);
        characters = characters.concat(String.fromCodePoint(unicode));
      });
    }
    
    if (charOption.includes('symbols')) characters = characters.concat(Character.symbols);
    if (charOption.includes('ascii')) characters = characters.concat(Character.ascii);

    return characters;
  }
}

export { PasswordBuilder };