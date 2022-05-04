import path from "path";
import { platform } from "os";
import { OS } from '@main/platform/OS';
import { WindowMenu } from "./WindowMenu";
import { Extensions } from "@main/lib/icon";
import { ColorScheme } from './ColorScheme';
import { IpcBridge } from '@main/ipc/IpcBridge';
import { BrowserWindow, app, nativeTheme } from 'electron';
 
class MainWindow implements ColorScheme {
  private os: OS;
  private menu: WindowMenu;

  public constructor() {
    this.os = new OS(platform());
    this.menu = new WindowMenu();
  }

  public async createWindow(): Promise<void> {
    const win: BrowserWindow = new BrowserWindow({
      show: false,
      center: true,
      height: this.os.externalWindowHight,
      width: 350,
      maximizable: false,
      resizable: false,
      webPreferences: {
        preload: path.join(__dirname, '../preload.js'),
        contextIsolation: true
      }
    });
  
    if (process.env.NODE_ENV === 'development') {
      win.webContents.openDevTools();
    }
  
    win.once('ready-to-show', () => {
      win.show();
    });
    win.on('closed', () => {
      app.quit();
    });

    win.setIcon(this.loadIcon());
    win.loadFile(this.renderHtmlFile());

    await this.callRendererProcess(win);
  }

  public setAppColorScheme(scheme: string): void {
    nativeTheme.themeSource = <any>scheme;
  }

  private loadIcon(): string {
    const { ico, png } = Extensions;
    const iconPath: string = path.join(__dirname, '../../renderer/assets/images/asterisk'); 
    return platform() === 'win32' ? iconPath + `.${ico}` : `.${png}`;
  }

  private renderHtmlFile(): string {
    return path.join(__dirname, '../../renderer/index.html');
  }

  private async callRendererProcess(win: BrowserWindow): Promise<void> {
    IpcBridge.win = win;
    const { colorScheme } = await IpcBridge.getLocalStorageData();
    
    this.menu.createMenu();
    this.setAppColorScheme(colorScheme);
  }
}

export { MainWindow };