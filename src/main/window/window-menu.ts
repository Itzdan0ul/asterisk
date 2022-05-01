import os from 'os';
import path from 'path';
import fetch from 'node-fetch';
import { Theme } from './theme';
import { Config } from '../config/config';
import { 
  Menu,
  nativeImage, 
  shell, 
  dialog,
  app,
  nativeTheme
} from 'electron';

class WindowMenu implements Theme {
  public constructor() { }
  
  public createMenu(): void {
    const menu: Menu = Menu.buildFromTemplate([
      {
        label: 'Theme',
        submenu: [
          { 
            label: 'Light',
            click: () => { this.setColorScheme('light'); }
          },
          { 
            label: 'Dark',
            click: () => { this.setColorScheme('dark'); }
          },
        ]
      },
      {
        label: 'Help',
        submenu: [
          { 
            label: 'Issues',
            click: () => { this.reportAnIrregularity(); },
          },
          { 
            label: 'About',
            click: () => { this.displayAppInfo(); }
          }
        ]
      }
    ])
  
    Menu.setApplicationMenu(menu);
  }

  public setColorScheme(theme: any): void {
    const script = `
      function setColorScheme() {
        const config = { 
          colorScheme: '${theme}'
        }
        
        localStorage.setItem('config', JSON.stringify(config));
      }

      setColorScheme();
    `;
    
    nativeTheme.themeSource = theme;
    Config.window.webContents.executeJavaScriptInIsolatedWorld(2, [{ code: script }], true);
  }

  private reportAnIrregularity(): void {
    const url: string = 'https://github.com/Itzdan0ul/asterisk/issues';
    shell.openExternal(url);
  }

  private async displayAppInfo(): Promise<void> {
    try {
      const res = await fetch('https://api.github.com/repos/Itzdan0ul/asterisk/releases');
      const data = await res.json();

      let options: {} = {
        message: '',
        name: app.getName(),
        version: data[0].name,
        platform: os.version(),
        github: 'https://github.com/Itzdan0ul/asterisk'
      }
  
      this.showBoxWithInfo(options);
    } catch {
      let options: {} = {
        message: '',
        name: app.getName(),
        version: app.getVersion(),
        platform: os.version(),
        github: 'https://github.com/Itzdan0ul/asterisk'
      }
  
      this.showBoxWithInfo(options);
    }
  }

  private showBoxWithInfo(options: any): void {
    let { message, name, version, platform, github } = options;
    const isTheCurrentVersion: boolean = version === app.getVersion();
  
    if (isTheCurrentVersion) message = `${name}\nRelease: ${version}\nLicense: MIT\nPlatform: ${platform}\nGithub: ${github}`;
    else message = `This version of Asterisk is unattended, please download the latest version at: ${github}/releases`;
  
    dialog.showMessageBox({
      icon: nativeImage.createFromPath(path.join(__dirname, '../renderer', 'assets', 'images', 'asterisk.png')).resize({ width: 68, height: 68 }),
      title: 'About',
      message,
      defaultId: 1,
      buttons: isTheCurrentVersion ? ['Ok'] : ['Ok', 'Download']
    }).then(result => {
      if (result.response == 1) shell.openExternal(`${github}/releases`);
    });
  }
}

export { WindowMenu };