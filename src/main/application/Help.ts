import { shell } from 'electron';

class Help {
  private readonly repository: string = 'https://github.com/Itzdan0ul/asterisk';

  public openWebRepository(): void {
    shell.openExternal(this.repository);
  }
}

export default Help;
