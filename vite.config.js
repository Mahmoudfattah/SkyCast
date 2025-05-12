import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SkyCast/', // ← أضف هذا السطر هنا
  plugins: [react()],
})
