import { ipcMain } from 'electron';
import Emoji from '@src/main/application/char/Emoji';
import PasswordBuilder from '@main/application/PasswordBuilder';
import CharacterStringBuilder from '@src/main/application/char/CharacterStringBuilder';

ipcMain.handle(
  'main:password-builder',
  async (event: Electron.IpcMainInvokeEvent, args: any) => {
    switch (args[0]) {
      case 'BUILD_PASSWORD':
        event.sender.send(
          'renderer:password-builder:build-password',
          buildPassword(args[1])
        );
        break;
    }
  }
);

function buildPassword({ range, checkboxes, radios }: any): string {
  const characters = new CharacterStringBuilder(
    radios,
    checkboxes
  ).makeStringCharacters();

  if (checkboxes.includes('Emojis')) return new Emoji().randomEmoji(range);

  return new PasswordBuilder(characters, range).buildPassword();
}
