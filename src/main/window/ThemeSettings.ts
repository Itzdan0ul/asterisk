import Settings from './Settings';
import SettingsFile from './SettingsFile';

class ThemeSettings implements Settings {
  public getCurrentlySavedValue(): string {
    return new SettingsFile().readSettingsFile()['theme'];
  }

  public updateAttributeValue(newValue: any): void {
    const settingsFile: SettingsFile = new SettingsFile();
    const settings = settingsFile.readSettingsFile();
    settings['theme'] = newValue;

    settingsFile.writeInSettingsFile(settings);
  }
}

export default ThemeSettings;
