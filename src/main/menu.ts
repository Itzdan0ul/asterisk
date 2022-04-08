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
  const url: string = 'https://github.com/Itzdan0ul/asterisk/issues'
  shell.openExternal(url) 
}

const displayAppInfo = async (): Promise<void> => {
  try {
    const res = await fetch('https://api.github.com/repos/Itzdan0ul/asterisk/releases')
    const data = await res.json()

    let options: {} = {
      message: '',
      name: app.getName(),
      version: data[0].name,
      platform: os.version(),
      github: 'https://github.com/Itzdan0ul/asterisk'
    }

    messageBox(options)
  } catch {
    let options: {} = {
      message: '',
      name: app.getName(),
      version: app.getVersion(),
      platform: os.version(),
      github: 'https://github.com/Itzdan0ul/asterisk'
    }

    messageBox(options)
  }
}

function messageBox(options: any): void {
  let { message, name, version, platform, github } = options
  const isTheCurrentVersion: boolean = version === app.getVersion()

  if (isTheCurrentVersion) message = `${name}\nRelease: ${version}\nLicense: MIT\nPlatform: ${platform}\nGithub: ${github}`
  else message = `This version of Asterisk is unattended, please download the latest version at: ${github}/releases`

  dialog.showMessageBox({
    icon: nativeImage.createFromPath(path.join(__dirname, '../renderer', 'assets', 'images', 'asterisk.png')).resize({ width: 68, height: 68 }),
    title: 'About',
    message,
    defaultId: 1,
    buttons: isTheCurrentVersion ? ['Ok'] : ['Ok', 'Download']
  }).then(result => {
    if (result.response == 1) shell.openExternal(`${github}/releases`) 
  })
}