'use strict'

import { TOGGLE_SNACKBAR } from '../mutation-types.js'

const snackbar = {
  namespaced: true,
  state() {
    return { show: false }
  },
  mutations: {
    [TOGGLE_SNACKBAR] (state, payload) {
      state.show = payload
    }
  }
}

export { snackbar }