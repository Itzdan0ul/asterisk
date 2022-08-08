'use strict';

import { createStore } from 'vuex';
import { i18n } from './modules/i18n';
import { help } from './modules/help';
import { range } from './modules/range';
import { radio } from './modules/radio';
import { theme } from './modules/theme';
import { alert } from './modules/alert';
import { snackbar } from './modules/snackbar';
import { checkbox } from './modules/checkbox';
import { titlebar } from './modules/titlebar';
import { passwordBuilder } from './modules/password-builder';
import { passwordStrengthBar } from './modules/password-strength-bar';

export const store = createStore({
  strict: true,
  modules: {
    range,
    radio,
    checkbox,
    snackbar,
    passwordBuilder,
    i18n,
    theme,
    help,
    passwordStrengthBar,
    titlebar,
    alert,
  },
});
