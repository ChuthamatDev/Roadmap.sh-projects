import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    base: '/frontend-projects/05-Flash-Card/flash-cards-react/dist/',
    plugins: [react(), tailwindcss()],
})
