import path from 'path';
import fetch from 'node-fetch';
import { ColorScheme } from './ColorScheme';
import { IpcBridge } from '@main/ipc/IpcBridge';
import { 
  Menu,
  nativeImage, 
  shell, 
  dialog,
  app,
  nativeTheme
} from 'electron';

class WindowMenu implements ColorScheme {

  public constructor() { }
  
  public createMenu(): void {
    const menu: Menu = Menu.buildFromTemplate([
      {
        label: 'Theme',
        submenu: [
        { label: 'Light', click: () => this.setAppColorScheme('light') },
        { label: 'Dark', click: () => this.setAppColorScheme('dark') }
      ]
      },
      {
        label: 'Help',
        submenu: [
          { label: 'Issues', click: () => this.reportAnIrregularity() },
          { label: 'About', click: () => this.displayAppInfo() }
        ]
      }
    ])
  
    Menu.setApplicationMenu(menu);
  }

  setAppColorScheme(scheme: string): void {
    nativeTheme.themeSource = <any>scheme;
    IpcBridge.setLocalStorageData(scheme);
  }

  private reportAnIrregularity(): void {
    const url: string = 'https://github.com/Itzdan0ul/asterisk/issues';
    shell.openExternal(url);
  }

  private async displayAppInfo(): Promise<void> {
    try {
      const res = await fetch('https://api.github.com/repos/Itzdan0ul/asterisk/releases');
      const data = await res.json();
      const release = data[0].name;
      
      const currentRelease: boolean = app.getVersion() === release;

      dialog.showMessageBox({
        icon: nativeImage.createFromPath(path.join(__dirname, '../../renderer', 'assets', 'images', 'asterisk.png')).resize({ width: 68, height: 68 }),
        title: currentRelease ? 'About' : 'New update',
        message: currentRelease ? `Asterisk V${app.getVersion()}` : 'A new version is available.',
        defaultId: 1,
        buttons: currentRelease ? ['Ok'] : ['Ok', 'Download']
      }).then(result => {
        if (result.response == 1) shell.openExternal('https://github.com/Itzdan0ul/asterisk/releases');
      });
    } catch {
      dialog.showMessageBoxSync({ title: 'About', message: `${app.getName()} ${app.getVersion()}` });
    }
  }
}

export { WindowMenu };