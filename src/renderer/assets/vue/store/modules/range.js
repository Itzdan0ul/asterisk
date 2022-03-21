'use strict'

import { SET_RANGE } from '../mutation-types.js'

const range = {
  namespaced: true,
  state() {
    return {
      count: 1
    }
  },
  mutations: {
    [SET_RANGE] (state, value) {
      const inputRange = document.getElementById("input-range")
      inputRange.style.setProperty("--value", (value * 2))
      
      state.count = value
    }
  },
}

export { range }