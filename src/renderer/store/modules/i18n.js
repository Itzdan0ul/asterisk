'use strict';

import { GET_LOCALE, SET_LOCALE, TRANSLATE } from '../mutation-types';
import {
  getLocaleHandler,
  setLocaleHanlder,
  translateHandler,
} from '@renderer/common/i18n';

export const i18n = {
  namespaced: true,
  state() {
    return {
      locale: '',
      messages: [],
    };
  },
  mutations: {
    [GET_LOCALE](state, locale) {
      state.locale = locale;
    },
    [SET_LOCALE](state, locale) {
      state.locale = locale;
      setLocaleHanlder(locale);
    },
    [TRANSLATE](state, data) {
      const { messages } = data;
      state.messages = messages;
    },
  },
  actions: {
    async getLocale({ commit }) {
      const data = await getLocaleHandler();
      commit('GET_LOCALE', data);
    },
    async translate({ commit }) {
      const data = await translateHandler();
      commit('TRANSLATE', data);
    },
  },
};
