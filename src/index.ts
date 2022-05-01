import '@src/preload';

import { app } from 'electron'
import { init } from '@src/main';

app.whenReady()
  .then(() => {
    init();
  })
  .catch(reason => {
    throw new Error(reason);
  });