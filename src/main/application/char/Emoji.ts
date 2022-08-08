import Characters from './Characters';
import EmojiConstructor from './EmojiConstructor';

class Emoji implements Characters, EmojiConstructor {
  public formString(): string[] {
    return ['🤓', '🥺', '👾', '🤑', '👽', '👻', '😍', '🤤', '🥳', '🐋', '❤️'];
  }

  public randomEmoji(range: number): string {
    let emojis: string = '';

    for (let i: number = 0; i < range; i++) {
      emojis = emojis.concat(
        this.formString()[Math.floor(Math.random() * this.formString().length)]
      );
    }

    return emojis;
  }
}

export default Emoji;
