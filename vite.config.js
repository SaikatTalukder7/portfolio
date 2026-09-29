// Vite build configuration.
// The react() plugin adds support for JSX and fast refresh during development.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
