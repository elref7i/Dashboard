import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(), visualizer()],
  build: {
    minify: 'esbuild',
    sourcemap: false,
    treeshake: true, // تأكيد تفعيل Tree Shaking
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
      treeShaking: true, // إضافة Tree Shaking هنا برضه
    },
  },
});
