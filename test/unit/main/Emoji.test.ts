import Emoji from '../../../src/main/application/char/Emoji';

describe('Emojis', () => {
  it('should return the emojis defined in the array.', () => {
    const emojis: string[] = new Emoji().formString();

    expect(emojis).toStrictEqual([
      '🤓',
      '🥺',
      '👾',
      '🤑',
      '👽',
      '👻',
      '😍',
      '🤤',
      '🥳',
      '🐋',
      '❤️',
    ]);
  });
});
