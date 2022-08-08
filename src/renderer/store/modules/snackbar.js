'use strict';

import { TOGGLE_SNACKBAR } from '../mutation-types.js';

export const snackbar = {
  namespaced: true,
  state() {
    return {
      showSnackbar: false,
    };
  },
  mutations: {
    [TOGGLE_SNACKBAR](state, isVisible) {
      state.showSnackbar = isVisible;
    },
  },
};
