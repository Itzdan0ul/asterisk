import path from 'path';
import fs from 'fs-extra';
import I18nSettings from './I18nSettings';

class I18n {
  private readonly CURRENT_LOCALES: Array<string> = ['en-US', 'es-419'];
  private readonly LOCALES_PATH: string = path.join(__dirname, '../../../locales/');

  public setLocale(locale: string): void {
    return new I18nSettings().updateAttributeValue(locale);
  }

  public translate(): {} {
    const locale: string = new I18nSettings().getCurrentlySavedValue();
    const localeExist: boolean = this.CURRENT_LOCALES.includes(locale);

    const messages = fs.readJSONSync(
      this.LOCALES_PATH + `${localeExist ? locale : 'en-US'}.json`
    );

    return { messages };
  }
}

export default I18n;
