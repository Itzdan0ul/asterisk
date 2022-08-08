'use strict';

import { CHANGE_CHECKBOX_STATE } from '../mutation-types';

export const checkbox = {
  namespaced: true,
  state() {
    return { checkboxes: ['Uppercase', 'Lowercase', 'Numbers', 'Symbols'] };
  },
  mutations: {
    [CHANGE_CHECKBOX_STATE](state, checkbox) {
      const isChecked = state.checkboxes.includes(checkbox);
      if (isChecked) {
        const index = state.checkboxes.indexOf(checkbox);
        state.checkboxes.splice(index, 1);
      } else {
        state.checkboxes.push(checkbox);
        if (checkbox === 'Emojis') state.checkboxes = ['Emojis'];
      }
    },
  },
};
