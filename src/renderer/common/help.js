'use strict';

/**
 * Establishes communication with the `main process` and opens the application repository using the `shell.openExternal()` method.
 * @type {void}
 */
export const openWebRepositoryHandler = () => {
  window.electronAPI.invoke('main:help', ['OPEN_WEB_REPOSITORY']);
};
