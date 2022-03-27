import os from 'os'
import path from 'path'
import fetch from 'node-fetch'
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

const displayAppInfo = async (): Promise<void> => {
  try {
    const res = await fetch('https://api.github.com/repos/Itzdan0ul/password-mini/releases')
    const data = await res.json()

    let message: string = ''
    const name: string = app.getName()
    const version: string = data[0].name
    const platform: string = os.version()
    const github: string = 'https://github.com/Itzdan0ul/password-mini'
  
    if (version == app.getVersion()) {
      message = `${name}\nRelease: ${version}\nLicense: MIT\nPlatform: ${platform}\nGithub: ${github}`
    } else {
      message = `This version of Password Mini is unattended, please download the latest version at: ${github}/releases`
    }
  
    dialog.showMessageBox(null, {
      icon: nativeImage.createFromPath(path.join(__dirname, '../renderer', 'assets', 'images', 'password-mini.png')).resize({ width: 68, height: 68 }),
      title: 'About',
      message,
      defaultId: 0,
      buttons: ['Download', 'It\'s ok.', ]
    }).then(result => {
      if (result.response == 0) shell.openExternal(`${github}/releases`) 
    })
  } catch {
    dialog.showMessageBoxSync(null, {
      icon: nativeImage.createFromPath(path.join(__dirname, '../renderer', 'assets', 'images', 'password-mini.png')).resize({ width: 68, height: 68 }),
      title: 'About',
      message: app.getName(),
      buttons: ['It\'s ok.']
    })
  }
}