import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ?'/AADHI-Engineering-Works/': '/',
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'dist',
  },

})
