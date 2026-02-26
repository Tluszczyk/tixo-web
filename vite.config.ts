import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { qrcode } from 'vite-plugin-qrcode'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/tixo-web/',
  esbuild: {
    target: 'es2020',
  },
  plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss(), qrcode()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true, // Short for '0.0.0.0', allows access from Docker
    port: 5173, // The internal port (inside container)
    strictPort: true,
    hmr: {
      clientPort: 3000, // The external port the browser uses
    },
  },
})
