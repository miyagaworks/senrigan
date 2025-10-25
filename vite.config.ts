import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  publicDir: 'public',
  // ベースパスを絶対パスに変更
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: '',  // アセットディレクトリをルートに変更
    emptyOutDir: true,
    manifest: true,
    sourcemap: true,
    modulePreload: {
      polyfill: true
    },
    target: 'es2020',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor';
          }
        },
        // ファイルパスの構造を単純化
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'images/[name].[hash][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'css/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    },
    cssCodeSplit: true,
    minify: 'esbuild',
    reportCompressedSize: true
  },
  esbuild: {
    drop: ['console', 'debugger']
  },
  assetsInclude: ['**/*.ico', '**/*.png', '**/*.svg', '**/*.jpg', '**/*.webp'],
  server: {
    port: 3001,
    strictPort: true,
    cors: true,
    hmr: {
      overlay: true
    },
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    }
  },
  preview: {
    port: 3000,
    strictPort: true,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Content-Type': 'application/javascript'
    }
  }
});