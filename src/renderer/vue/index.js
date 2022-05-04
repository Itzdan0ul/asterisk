'use strict';

import App from './App.vue';
import { store } from './store';
import { createApp, h } from 'vue';

const app = createApp({
  render() { return h(App) }
})

app.use(store);
app.mount('#v-app');