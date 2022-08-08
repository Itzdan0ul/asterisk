'use strict';

/**
 * Establishes communication with the `main process` and calls the `closeWindow()` method to close the window.
 * @type {void}
 */
export const closeWindowHandler = () => {
  window.electronAPI.invoke('main:window', ['CLOSE_WINDOW']);
};

/**
 * Establishes communication with the `main process` and calls the `minimizeWindow()` method to minimize the window.
 * @type {void}
 */
export const minimizeWindowHandler = () => {
  window.electronAPI.invoke('main:window', ['MINIMIZE_WINDOW']);
};
