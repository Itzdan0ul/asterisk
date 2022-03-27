import os from 'os'
import path from 'path'
import createMenu from './menu'
import { Platform } from './platform'
import { setColorScheme } from './theme'
import { BrowserWindow, app } from 'electron'

export default function createWindow(): void {
	const platform: Platform = new Platform(os.platform())
	const win: BrowserWindow = new BrowserWindow({
		show: false,
		center: true,
		height: platform.setWindowHeight(),
		width: 350,
		maximizable: false,
		resizable: false,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			contextIsolation: true
		}
	})

	if (process.env.NODE_ENV === 'development') {
		win.webContents.openDevTools()
	}

	if (platform._platform == 'win32') {
		win.setIcon(path.join(__dirname, '../renderer', 'assets', 'images', 'password-mini.ico'))
	} else if (platform._platform == 'linux') {
		win.setIcon(path.join(__dirname, '../renderer', 'assets', 'images', 'password-mini.png'))
	}

	win.once('ready-to-show', () => {
		win.show()
	})
	win.on('closed', () => {
		app.quit()
	})

	createMenu()
	setColorScheme('system')

	win.loadFile(path.join(__dirname, '../renderer', 'views', 'index.html'))
}
