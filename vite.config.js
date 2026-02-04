import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rollupOptions:{
      input:{
        main: resolve(__dirname,'index.html'),
        blog: resolve(__dirname,'pages/blog-card.html'),
        qr: resolve(__dirname, 'pages/qr-card.html')
      }
    }
  }
})