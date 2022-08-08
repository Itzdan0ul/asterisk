'use strict';

import { CLOSE_WINDOW, MINIMIZE_WINDOW } from '../mutation-types';
import { closeWindowHandler, minimizeWindowHandler } from '@renderer/common/titlebar';

export const titlebar = {
  namespaced: true,
  mutations: {
    [CLOSE_WINDOW](state) {
      closeWindowHandler();
    },
    [MINIMIZE_WINDOW](state) {
      minimizeWindowHandler();
    },
  },
};
