import Characters from './Characters';

class Symbols implements Characters {
  constructor(private readonly character: string) {}

  public formString(): string {
    return this.character;
  }
}

export default Symbols;
