class Platform {
  private name: string;

  public get _name(): string { return this.name }

  constructor(name: NodeJS.Platform) {
    this.name = name
  }

  public setWindowHeight(): number | undefined {
    switch (this.name) {
      case 'win32':
        return 364
      case 'linux':
        return 340
    }
  }
}

export { Platform }