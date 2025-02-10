import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(), visualizer()],
  base: './', // أو جرب "/"
  build: {
    minify: 'esbuild',
    sourcemap: false,
    treeshake: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.includes('@mui') ? 'mui' : 'vendor';
          }
        },
      },
    },
    esbuild: {
      minify: true,
      treeShaking: true,
    },
  },
});
