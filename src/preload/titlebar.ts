import { ipcMain } from 'electron';
import Titlebar from '@src/main/window/Titlebar';

ipcMain.handle('main:window', async (event: Electron.IpcMainInvokeEvent, args: any) => {
  switch (args[0]) {
    case 'CLOSE_WINDOW':
      closeWindow();
      break;
    case 'MINIMIZE_WINDOW':
      minimizeWindow();
      break;
    default:
  }
});

function closeWindow(): void {
  Titlebar.closeWindow();
}

function minimizeWindow(): void {
  Titlebar.minimizeWindow();
}
