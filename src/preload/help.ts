import { ipcMain } from 'electron';
import Help from '@main/application/Help';

ipcMain.handle(
  'main:help',
  async (event: Electron.IpcMainInvokeEvent, args: any) => {
    switch (args[0]) {
      case 'OPEN_WEB_REPOSITORY':
        openWebRepositoryHandler();
        break;
      default:
    }
  }
);

const openWebRepositoryHandler = (): void => {
  new Help().openWebRepository();
};
