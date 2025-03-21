import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  define: {
    "import.meta.env.VITE_API_BASE_URL": JSON.stringify("https://stock-market-backend-code.onrender.com/api/v1"),
  },
})
