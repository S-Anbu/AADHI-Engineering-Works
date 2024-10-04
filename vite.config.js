import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/AADHI-Engineering-Works/',
  build: {
    chunkSizeWarningLimit: 1600,
  },

})
