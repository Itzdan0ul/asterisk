'use strict';

import { SET_RANGE } from '../mutation-types';

export const range = {
  namespaced: true,
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    [SET_RANGE](state, value) {
      const slider = document.getElementById('range');
      slider.style.setProperty('--value', value * 2);

      state.count = value;
    },
  },
};
