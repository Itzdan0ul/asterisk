'use strict'

import { createStore } from 'vuex'
import { range } from './modules/range.js'
import { radio } from './modules/radio.js'
import { checkbox } from './modules/checkbox.js'
import {  semaphore} from './modules/semaphore.js'
import { passwordBuilder } from './modules/password-builder.js'
import { snackbar } from './modules/snackbar.js'

const store = createStore({
  strict: true,
  modules: { 
    range,
    radio,
    checkbox,
    snackbar,
    semaphore,
    passwordBuilder
  }
})

export { store }