import Characters from './Characters';

class Numbers implements Characters {
  constructor(private readonly character: string) {}

  public formString(): string {
    return this.character;
  }
}

export default Numbers;
