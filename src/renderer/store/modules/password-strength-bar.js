'use strict';

import { VALIDATE_PASSWORD_SECURITY } from '../mutation-types.js';

export const passwordStrengthBar = {
  namespaced: true,
  state() {
    return {
      security: []
    }
  },
  mutations: {
    [VALIDATE_PASSWORD_SECURITY] (state, { range }) {
      if (range <= 50 && range > 11) {
        state.security = ['strong'];
      } else if (range <= 11 && range > 6) {
        state.security = ['medium'];
      } else if (range <= 6 && range >= 1) {
        state.security = ['weak'];
      } else if (range === 0) {
        state.security = ['none'];
      }
    }
  }
}
