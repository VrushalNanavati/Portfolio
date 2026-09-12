import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

/**
 * Base path for GitHub Pages.
 *  - User/organization site (https://<user>.github.io):   VITE_BASE_PATH=/
 *  - Project site (https://<user>.github.io/<repo>/):      VITE_BASE_PATH=/<repo>/
 * Set it in `.env.production` or as an environment variable in CI. Defaults to '/'.
 * The CI workflow (.github/workflows/deploy.yml) derives it from the repository name.
 */
export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env };
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/',
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            motion: ['framer-motion'],
          },
        },
      },
    },
  };
});
