import { ipcMain } from 'electron';
import I18n from '@src/main/window/I18n';
import I18nSettings from '@src/main/window/I18nSettings';

ipcMain.handle('main:i18n', async (event: Electron.IpcMainInvokeEvent, args: any) => {
  switch (args[0]) {
    case 'GET_LOCALE':
      event.sender.send('renderer:i18n:get-locale', getLocale());
      break;
    case 'SET_LOCALE':
      setLocale(args[1]);
      break;
    case 'TRANSLATE':
      event.sender.send('renderer:i18n:translate', translate());
      break;
    default:
  }
});

function getLocale(): string {
  return new I18nSettings().getCurrentlySavedValue();
}

function setLocale(locale: string): void {
  new I18n().setLocale(locale);
}

function translate(): {} {
  return new I18n().translate();
}
