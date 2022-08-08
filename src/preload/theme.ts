import { ipcMain } from 'electron';
import Theme from '@main/window/Theme';

ipcMain.handle('main:theme', async (event: Electron.IpcMainInvokeEvent, args: any) => {
  switch (args[0]) {
    case 'SET_THEME':
      setTheme(args[1]);
      break;
    case 'SAVE_THEME':
      saveTheme(args[1]);
      break;
    default:
  }
});

const setTheme = (theme: 'system' | 'light' | 'dark'): void => {
  new Theme().setTheme(theme);
};

const saveTheme = (theme: string): void => {
  new Theme().saveTheme(theme);
};
