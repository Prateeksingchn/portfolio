import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    {
      name: 'copy-redirects',
      writeBundle() {
        fs.copyFileSync(
          path.resolve(__dirname, 'public/_redirects'),
          path.resolve(__dirname, 'dist/_redirects')
        )
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.glb'],
  server: {
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})