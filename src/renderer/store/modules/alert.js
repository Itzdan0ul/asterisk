'use strict';

import { TOGGLE_SNACKBAR } from '../mutation-types.js';

export const alert = {
  namespaced: true,
  state() {
    return {
      showAlert: false,
    };
  },
  mutations: {
    [TOGGLE_SNACKBAR](state, isVisible) {
      state.showAlert = isVisible;
    },
  },
};
