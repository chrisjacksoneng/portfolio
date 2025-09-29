import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/portfolio/', // Commented out for local development
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
