import Settings from './Settings';
import SettingsFile from './SettingsFile';

class I18nSettings implements Settings {
  public getCurrentlySavedValue(): string {
    return new SettingsFile().readSettingsFile()['locale'];
  }

  public updateAttributeValue(newValue: any): void {
    const settingsFile: SettingsFile = new SettingsFile();
    const settings = settingsFile.readSettingsFile();
    settings['locale'] = newValue;

    settingsFile.writeInSettingsFile(settings);
  }
}

export default I18nSettings;
