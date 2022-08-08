import Characters from './Characters';

class Lowercase implements Characters {
  constructor(private readonly character: string) {}

  public formString(): string {
    return this.character;
  }
}

export default Lowercase;
