import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  base: '/port-react/',  // Set the base to match your GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'dist',  // or 'build', depending on your folder structure
  },
});
