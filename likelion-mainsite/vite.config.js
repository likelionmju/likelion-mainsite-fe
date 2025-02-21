import { defineConfig } from 'vite';
import path from 'node:path'; // ✅ ESM 방식으로 변경
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://54.180.159.45:8080', // 백엔드 서버 주소로 변경
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
