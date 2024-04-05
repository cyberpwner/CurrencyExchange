import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CurrencyExchange/', // your repository name
  build: {
    outDir: 'dist',
  },
});
