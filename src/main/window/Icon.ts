import path from 'path';
import { Extensions } from '../lib/icons';
import { nativeImage, NativeImage } from 'electron';

class Icon {
  private readonly path: string = path.join(
    __dirname,
    '../../renderer/assets/images/asterisk@256x256'
  );

  public setIconPerOS(os: 'win32' | 'linux' | 'darwin'): NativeImage {
    switch (os) {
      case 'win32':
        return nativeImage.createFromPath(`${this.path}.${Extensions.ico}`);
      case 'linux':
        return nativeImage.createFromPath(`${this.path}.${Extensions.png}`);
      case 'darwin':
        return nativeImage.createFromPath(`${this.path}.${Extensions.icns}`);
    }
  }
}

export default Icon;
