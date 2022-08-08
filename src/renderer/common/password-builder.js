'use strict';

/**
 * Establish communication with the `main process` and create a password.
 * @type {Promise<string>}
 * @param {any} payload Represents the checkboxes, radios and the range.
 * @returns Returns a password constructed from the values sent.
 */
export const buildPasswordHandler = (payload) => {
  return new Promise((resolve) => {
    window.electronAPI.invoke('main:password-builder', ['BUILD_PASSWORD', payload]);
    window.electronAPI.once('renderer:password-builder:build-password', (password) => {
      resolve(password);
    });
  });
};
