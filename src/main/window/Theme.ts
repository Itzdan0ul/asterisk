import { nativeTheme } from 'electron';
import ThemeSettings from './ThemeSettings';

class Theme {
  public setTheme(theme: 'system' | 'light' | 'dark'): void {
    nativeTheme.themeSource = theme;
  }

  public saveTheme(theme: string): void {
    new ThemeSettings().updateAttributeValue(theme);
  }
}

export default Theme;
