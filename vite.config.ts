import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const asyncStylesheetPlugin = () => ({
  name: 'async-stylesheet',
  apply: 'build' as const,
  enforce: 'post' as const,
  transformIndexHtml(html: string) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
      `<link rel="preload" as="style" crossorigin href="$1" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" crossorigin href="$1"></noscript>`,
    )
  },
})

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'es2022',
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react/jsx-runtime': 'preact/jsx-runtime',
      'react/jsx-dev-runtime': 'preact/jsx-dev-runtime',
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    asyncStylesheetPlugin(),
  ],
})
