class OS {
  private os: NodeJS.Platform;

  public constructor(os: NodeJS.Platform) {
    this.os = os;
  }

  public get externalWindowHight(): number {
    return this.os === 'win32' ? 364 : 340;
  }
}

export { OS };
