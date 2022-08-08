import Characters from './Characters';

class Uppercase implements Characters {
  constructor(private readonly character: string) {}

  public formString(): string {
    return this.character;
  }
}

export default Uppercase;
