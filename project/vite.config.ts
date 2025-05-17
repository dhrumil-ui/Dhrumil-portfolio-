import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Dhrumil-portfolio-/", // exactly matching the repo name
  plugins: [react()],
})
