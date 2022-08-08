'use strict';
/**
 * Establishes communication with the `main process` and obtains the user's locale.
 * @type {Promise<string>}
 * @returns Return locale launched from main process.
 */
export const getLocaleHandler = () => {
  return new Promise((resolve) => {
    window.electronAPI.invoke('main:i18n', ['GET_LOCALE']);
    window.electronAPI.once('renderer:i18n:get-locale', (locale) => {
      resolve(locale);
    });
  });
};

/**
 * Establishes communication with the `main process` and sets the user locale.
 * @type {void}
 * @param {string} locale The selected location (e.g. 'en-US').
 */
export const setLocaleHanlder = (locale) => {
  window.electronAPI.invoke('main:i18n', ['SET_LOCALE', locale]);
};

/**
 * It establishes communication with the `main process` and obtains the messages in the user's locale.
 * @type {Promise<string>}
 * @returns Returns an object containing all messages in the selected locale.
 */
export const translateHandler = () => {
  return new Promise((resolve) => {
    window.electronAPI.invoke('main:i18n', ['TRANSLATE']);
    window.electronAPI.once('renderer:i18n:translate', (messages) => {
      resolve(messages);
    });
  });
};
