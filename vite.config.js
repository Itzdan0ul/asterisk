import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  root: path.join(__dirname, 'src/renderer/'),
  base: '',
  mode: 'development',
  resolve: {
    alias: {
      '@renderer': path.join(__dirname, 'src/renderer/'),
    }
  },
  plugins: [vue()],
});
