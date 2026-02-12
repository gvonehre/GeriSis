// -----------------------------------------------------------------------------
// File: vite.config.ts
// Purpose: Vite configuration for local development and production builds.
// PHD: P. Heiniger Design — Practical creative solutions from Andermatt. (design@pascalheiniger.ch)
// -----------------------------------------------------------------------------

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.LLM_API_KEY ?? ''),
      'process.env.LLM_API_KEY': JSON.stringify(env.LLM_API_KEY ?? ''),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
