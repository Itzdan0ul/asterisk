import { PasswordBuilder } from '@src/main/logic/PasswordBuilder';

describe('Password', () => {
  it('Should return the length of the assigned password.', () => {
    const length: number = PasswordBuilder.getPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 15)!.length;
    expect(length).toBe(15);
  });
  it('Should be undefined when the length is zero.', () => {
    const password: string = PasswordBuilder.getPassword('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 0)!;
    expect(password).toBeUndefined();
  });
  test('Should be true if it includes �.', () => {
    const password: string = PasswordBuilder.getPassword('v🤮mk�👽😍qu�🥺kuj👽��jmg�😍n👻🥺kvw��i', 18)!;
    expect(password.includes('�')).toBeTruthy();
  });
  it('Should return the string without �.', () => {
    const password: string = 'v🤮mk�👽😍qu�🥺kuj👽��jmg�😍n👻🥺kvw��i';
    expect(password.replace(/\uFFFD/g, '')).toEqual('v🤮mk👽😍qu🥺kuj👽jmg😍n👻🥺kvwi');
  });
});

describe('Characters', () => {
  it('Should return a string of lowercase and uppercase characters concatenated.', () => {
    const characters: string = PasswordBuilder.getChar(['all characters'], ['uppercase', 'lowercase'])
    expect(characters).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
  })
  it('Should return an empty string if the chars option is not selected.', () => {
    const characters: string = PasswordBuilder.getChar(['all characters'], [])
    expect(characters).toBe('')
  })
  it('Should return a character string of numbers without 0 and 1.', () => {
    const characters: string = PasswordBuilder.getChar(['easy to read'], ['numbers'])
    expect(characters).toBe('23456789')
  })
  it('Should return a string of emojis.', () => {
    const characters: string = PasswordBuilder.getChar(['all characters'], ['emoji'])
    expect(characters).toBe('👻👽🖕🥵🥺🤮😍🙁')
  })
})