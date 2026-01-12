import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/',
  // for gh-pages
  base: '/bubblitz/' 

  // for simplifying local and gh-pages access
  // base: process.env.NODE_ENV === 'production' ? '/bubblitz/' : '/',

});

