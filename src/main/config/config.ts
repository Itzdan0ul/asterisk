import { BrowserWindow } from 'electron';

class Config {
  private static _window: BrowserWindow;

  public static set window(window: BrowserWindow) { this._window = window; }
  public static get window(): BrowserWindow { return this._window; }

  public static async getWebConfig(): Promise<any> {
    return JSON.parse(await this.localStorage());
  }
  
  private static async localStorage(): Promise<any> {
    const script: string = `
      localStorage.getItem('config');
    `;
    const data: any = this.window.webContents.executeJavaScriptInIsolatedWorld(1, [{ code: script }], true);
    return new Promise(resolve => { resolve(data); });
  }
}

export { Config };