import { nativeTheme } from 'electron'

const setColorScheme = (theme: any): void => {
  if (nativeTheme.themeSource != theme) nativeTheme.themeSource = theme
}

export { setColorScheme }