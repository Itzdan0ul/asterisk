'use strict';

import { CHANGE_CHECKBOX_STATE } from '../mutation-types.js';

const checkbox = {
  namespaced: true,
  state() {
    return {
      checkboxGroup: [
        'uppercase',
        'lowercase',
        'numbers',
        'symbols',
      ]
    }
  },
  mutations: {
    [CHANGE_CHECKBOX_STATE] (state, checkboxButton) {
      const unchecked = state.checkboxGroup.includes(checkboxButton);
      if (unchecked) {
        const index = state.checkboxGroup.indexOf(checkboxButton);
        state.checkboxGroup.splice(index, 1);
      } else {
        state.checkboxGroup.push(checkboxButton);
      }
    }
  }
}

export { checkbox };