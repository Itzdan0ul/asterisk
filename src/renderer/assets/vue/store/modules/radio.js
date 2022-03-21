'use strict'

import { store } from '../../store'
import { CHANGE_RADIO_STATE } from '../mutation-types.js'

const radio = {
  namespaced: true,
  state() {
    return { radioGroup: ['all-radio'] }
  },
  mutations: {
    [CHANGE_RADIO_STATE] (state, radioButton) {
      if (!state.radioGroup.includes(radioButton)) {
        state.radioGroup.push(radioButton)
        state.radioGroup = state.radioGroup.filter(i => i == radioButton)

        if (state.radioGroup.includes('say-radio')) {
          store.state.checkbox.checkboxGroup = ['uppercase', 'lowercase']
        } else if (state.radioGroup.includes('all-radio')) {
          store.state.checkbox.checkboxGroup = ['uppercase', 'lowercase', 'numbers', 'symbols']
        }
      }
    }
  }
}

export { radio }