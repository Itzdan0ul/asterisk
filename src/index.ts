import './preload'

import { app } from 'electron'
import createWindow from './main/app'

app.whenReady()
  .then(() => {
    createWindow()
  })
  .catch(() => {
    throw new Error('An error occurred while running the application.')
  })