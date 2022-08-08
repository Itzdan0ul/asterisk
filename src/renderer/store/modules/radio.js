'use strict';

import { store } from '../';
import { CHANGE_RADIO_STATE } from '../mutation-types';

export const radio = {
  namespaced: true,
  state() {
    return { radios: ['All characters'] };
  },
  mutations: {
    [CHANGE_RADIO_STATE] (state, radio) {
      if (!state.radios.includes(radio)) {
        state.radios.push(radio);
        state.radios = state.radios.filter(i => i === radio);

        if (state.radios.includes('Easy to say')) {
          store.state.checkbox.checkboxes = ['Uppercase', 'Lowercase'];
        } else if (state.radios.includes('All characters')) {
          store.state.checkbox.checkboxes = ['Uppercase', 'Lowercase', 'Numbers', 'Symbols'];
        }
      }
    }
  }
}
