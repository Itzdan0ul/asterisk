'use strict';

import { BUILD_PASSWORD } from '../mutation-types';
import { buildPasswordHandler } from '@renderer/common/password-builder';

export const passwordBuilder = {
  namespaced: true,
  state() {
    return {
      password: '',
    };
  },
  mutations: {
    [BUILD_PASSWORD](state, password) {
      state.password = password;
    },
  },
  actions: {
    async buildPassword({ commit }, payload) {
      const password = await buildPasswordHandler(payload);
      commit('BUILD_PASSWORD', password);
    },
  },
};
