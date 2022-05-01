'use strict';

import { GET_PASSWORD } from '../mutation-types.js';
import { getPasswordHandler } from '../../../javascript/renderer/password-builder.js';

const passwordBuilder = {
  namespaced: true,
  state() {
    return {
      password: ''
    }
  },
  mutations: {
    [GET_PASSWORD] (state, password) {
      state.password = password;
    }
  },
  actions: {
    async getPassword({ commit }, payload) {
      const password = await getPasswordHandler(payload);
      commit('GET_PASSWORD', password);
    }
  }
}

export { passwordBuilder };