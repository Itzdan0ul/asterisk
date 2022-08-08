'use strict';

/**
 * Establishes communication with the `main process` and sends the selected UI theme.
 * @type {void}
 * @param {string} theme The selected theme (e.g. 'dark').
 */
export const setThemeHandler = (theme) => {
  window.electronAPI.invoke('main:theme', ['SET_THEME', theme]);
};

/**
 * Establishes communication with the `main process` and sends the selected topic for saving.
 * @type {void}
 * @param {string} theme The selected theme to save (e.g. 'dark').
 */
export const saveThemeHandler = (theme) => {
  window.electronAPI.invoke('main:theme', ['SAVE_THEME', theme]);
};
