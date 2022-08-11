import path from 'path';
import Icon from './Icon';
import { platform } from 'os';
import TitleBar from './Titlebar';
import { BrowserWindow } from 'electron';

class Window extends BrowserWindow {
  constructor() {
    super({
      show: false,
      center: true,
      height: 405,
      width: 524,
      maximizable: false,
      resizable: false,
      frame: platform() === 'linux' ? false : true,
      titleBarStyle: 'hidden',
      icon: new Icon().setIconPerOS(platform() as 'win32' | 'linux' | 'darwin'),
      webPreferences: {
        preload: path.join(__dirname, '../preload.js'),
        enableWebSQL: false,
        webgl: false,
        spellcheck: false,
        v8CacheOptions: 'none',
        devTools: process.env.NODE_ENV === 'development' ? true : false,
        sandbox: false,
      },
    });

    TitleBar.window = this;
  }
}

export default Window;
