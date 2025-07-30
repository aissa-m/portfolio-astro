// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      host: true,
      port: 4321,
      allowedHosts: ['.ngrok-free.app'],
      strictPort: false,
      watch: {
        usePolling: true,
      }
    }
  }
});