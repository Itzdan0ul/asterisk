'use strict';

import { OPEN_WEB_REPOSITORY } from '../mutation-types';
import { openWebRepositoryHandler } from '../../common/help';

export const help = {
  namespaced: true,
  mutations: {
    [OPEN_WEB_REPOSITORY](state) {
      openWebRepositoryHandler();
    }
  },
}