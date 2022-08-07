import './helpers/custom-paths';

import '@src/preload';

import { app } from 'electron';
import App from '@main/window/App';

app
  .whenReady()
  .then(() => {
    new App();
  })
  .catch((reason) => {
    throw new Error(reason);
  });

app.disableHardwareAcceleration();

app.on('web-contents-created', (_, contents) => {
  contents.on('will-navigate', event => event.preventDefault());
});
