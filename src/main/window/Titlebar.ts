import Window from './Window';

class Titlebar {
  public static window: Window;

  private constructor() {}

  public static closeWindow(): void {
    this.window.close();
  }

  public static minimizeWindow(): void {
    this.window.minimize();
  }
}

export default Titlebar;
