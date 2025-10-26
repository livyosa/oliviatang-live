import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // 👈 must match your main repo name
  plugins: [react()],
})
