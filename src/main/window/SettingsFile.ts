import path from 'path';
import fs from 'fs-extra';
import { app, nativeTheme } from 'electron';

class SettingsFile {
  private FILE_PATH: string = path.join(app.getPath('appData'), 'asterisk/settings.json');

  constructor() {
    if (!fs.existsSync(this.FILE_PATH)) {
      const dirPath: string = path.join(app.getPath('appData'), 'asterisk');
      const settigs: {} = {
        theme: nativeTheme.themeSource,
        locale: app.getLocale(),
      };

      if (process.env.NODE_ENV === 'development') {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      fs.writeJsonSync(this.FILE_PATH, settigs, { spaces: 2 });
    }
  }

  public readSettingsFile(): any {
    return fs.readJSONSync(this.FILE_PATH, { encoding: 'utf8' });
  }

  public writeInSettingsFile(settings: any): void {
    fs.writeJSONSync(this.FILE_PATH, settings, { spaces: 2 });
  }
}

export default SettingsFile;
