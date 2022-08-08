'use strict';

import { LOAD_THEME, SET_THEME } from '../mutation-types';
import { setThemeHandler, saveThemeHandler } from '@renderer/common/theme';

export const theme = {
  namespaced: true,
  state() {
    return {
      icon: '',
    };
  },
  mutations: {
    [LOAD_THEME](state) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) state.icon = 'assets/images/dark_mode.svg';
      else state.icon = 'assets/images/light_mode.svg';
    },
    [SET_THEME](state) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (isDark) {
        state.icon = 'assets/images/light_mode.svg';

        setThemeHandler('light');
        saveThemeHandler('light');
      } else {
        state.icon = 'assets/images/dark_mode.svg';

        setThemeHandler('dark');
        saveThemeHandler('dark');
      }
    },
  },
};
