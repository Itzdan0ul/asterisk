import path from 'path';
import Theme from './Theme';
import Window from './Window';
import { app } from 'electron';
import ThemeSettings from './ThemeSettings';

class App {
  private readonly window: Window = new Window();

  constructor() {
    if (process.env.NODE_ENV === 'development') this.window.webContents.openDevTools();

    this.window.once('ready-to-show', (): void => {
      this.window.show();
    });

    this.window.on('closed', (): void => {
      app.quit();
    });

    this.window.removeMenu();
    this.window.loadFile(path.join(__dirname, '../../renderer/dist/index.html'));

    new Theme().setTheme(<any>new ThemeSettings().getCurrentlySavedValue());
  }
}

export default App;
