import path from "path";
import { platform } from "os";
import { Theme } from './theme';
import { Platform } from './platform';
import { Extensions } from "../lib/icon";
import { Config } from '../config/config';
import { WindowMenu } from "./window-menu";
import { BrowserWindow, app, nativeTheme } from 'electron';

class Window implements Theme, Platform {
  public get outerHeight(): number { return platform() === 'win32' ? 364 : 340; }

  public createWindow(): void {
    const win: BrowserWindow = new BrowserWindow({
      show: false,
      center: true,
      height: this.outerHeight,
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

    this.loadWebConfig(win);
  }
  
  public setColorScheme(theme: any): void {
    nativeTheme.themeSource = theme;
  }

  private loadIcon(): string {
    const { ico, png } = Extensions;
    const iconPath: string = path.join(path.resolve('src/renderer/assets/images/asterisk')); 
    return platform() === 'win32' ? iconPath + `.${ico}` : `.${png}`;
  }

  private renderHtmlFile(): string {
    return path.join(path.resolve('src/renderer/views/index.html'));
  }

  private async loadWebConfig(win: BrowserWindow): Promise<void> {
    const windowMenu: WindowMenu = new WindowMenu();
    windowMenu.createMenu();

    Config.window = win;
    const { colorScheme } = await Config.getWebConfig();
    
    this.setColorScheme(colorScheme);
  }
}

export { Window };