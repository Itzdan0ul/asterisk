'use strict'

import { SET_LEVEL } from '../mutation-types.js'

const semaphore = {
  namespaced: true,
  state() {
    return {
      level: []
    }
  },
  mutations: {
    [SET_LEVEL] (state, payload) {
      const { count } = payload
      if (count <= 50 && count > 11) {
        state.level = ['isStrong']
      } else if (count <= 11 && count > 6) {
        state.level = ['isNotStrong']
      } else if (count <= 6 && count >= 1) {
        state.level = ['isWeak']
      } else if (count == 0) {
        state.level = ['none']
      }
    }
  }
}

export { semaphore }