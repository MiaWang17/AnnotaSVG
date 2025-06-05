import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  server: {
    open: '/index.html' // 启动服务器时自动打开 svg.html
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        svg: resolve(__dirname, 'svg.html'),
        containerElements: resolve(__dirname, 'containerEl.html'),
        basicSvg: resolve(__dirname, 'basicSvg.html'),
        test: resolve(__dirname, 'test.html'),
        demo: resolve(__dirname, 'demo.html')
      }
    }
  }
});