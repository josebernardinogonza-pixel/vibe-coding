import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esta línea es la que hace que todo funcione
  base: '/vibe-coding/',
})
