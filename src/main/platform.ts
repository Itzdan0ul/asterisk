class Platform {
  private platform: string;

  public get _platform(): string { return this.platform }

  constructor(platform: NodeJS.Platform) {
    this.platform = platform
  }

  public setWindowHeight(): number {
    switch (this.platform) {
      case 'win32':
        return 364
      case 'linux':
        return 340
    }
  }
}

export { Platform }