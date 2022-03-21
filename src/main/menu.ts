import os from 'os'
import path from 'path'
import { setColorScheme } from './theme'
import { 
  Menu,
  nativeImage, 
  shell, 
  dialog,
  app,
} from 'electron'

export default function createMenu(): void {
  const menu: Menu = Menu.buildFromTemplate([
    {
      label: 'Theme',
      submenu: [
        { 
          label: 'Light',
          click: () => { setColorScheme('light') }
        },
        { 
          label: 'Dark',
          click: () => { setColorScheme('dark') }
        },
      ]
    },
    {
      label: 'Help',
      submenu: [
        { 
          label: 'Issues',
          click: reportAnIrregularity,
        },
        { 
          label: 'About',
          click: displayAppInfo
        }
      ]
    }
  ])

  Menu.setApplicationMenu(menu)
}

const reportAnIrregularity = (): void => {
  const url: string = 'https://github.com/Itzdan0ul/password-mini/issues'
  shell.openExternal(url) 
}

const displayAppInfo = (): void => {
  const name: string = app.getName()
  const version: string = app.getVersion()
  const platform: string = os.version()
  const github: string = 'https://github.com/Itzdan0ul/password-mini'

  dialog.showMessageBoxSync(null, {
    icon: nativeImage.createFromPath(path.join(__dirname, '../renderer', 'assets', 'images', 'password-mini.png')).resize({ width: 68, height: 68 }),
    title: 'About',
    message: `${name}\nStable: ${version}\nLicense: MIT\nPlatform: ${platform}\nGithub: ${github}`,
    buttons: ['It\'s ok.']
  })
}