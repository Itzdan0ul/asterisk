import { ipcMain } from 'electron';
import { PasswordBuilder } from '@src/main/logic/PasswordBuilder';

ipcMain.handle('main:password-builder', async (event: Electron.IpcMainInvokeEvent, args: any) => {
  switch (args[0]) {
    case 'GET_PASSWORD':
      getPasswordHandler(event, args[1]);
      break
    }
});

const getPasswordHandler = (event: Electron.IpcMainInvokeEvent, payload: any): void => {
  const { checkboxGroup, count, radioGroup } = payload;
  const chars: string = PasswordBuilder.generate(radioGroup, checkboxGroup);
  const password: string = <string> PasswordBuilder.getPassword(chars, count);

  event.sender.send('renderer:password-builder', password);
}