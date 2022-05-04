'use strict';

const getPasswordHandler = (payload) => {
  return new Promise(resolve => {
    window.electronAPI.invoke('main:password-builder', ['GET_PASSWORD', payload]);
    window.electronAPI.once('renderer:password-builder', (password) => {
      resolve(password);
    });
  });
}

export { getPasswordHandler }