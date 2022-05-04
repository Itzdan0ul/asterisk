import { BrowserWindow } from 'electron';

class IpcBridge {
  public static win: BrowserWindow;

  public static async getLocalStorageData(): Promise<any> {
    return JSON.parse(await this.accessLocalStorage());
  }

  public static setLocalStorageData(scheme: string): void {
    const script = `
      function setAppColorScheme() {
        const config = { 
          colorScheme: '${scheme}'
        }
      
        localStorage.setItem('config', JSON.stringify(config));
      }

      setAppColorScheme();
    ` ;
    
    this.win.webContents.executeJavaScriptInIsolatedWorld(2, [{ code: script }], true);
  }
  
  private static async accessLocalStorage(): Promise<any> {
    const script: string = `
      localStorage.getItem('config');
    `;
    const data: any = this.win.webContents.executeJavaScriptInIsolatedWorld(1, [{ code: script }], true);
    return new Promise(resolve => { resolve(data); });
  }
}

export { IpcBridge };