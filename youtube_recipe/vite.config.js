import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
  /*
  server: {
    port: 3000, // 개발 서버 포트 설정
  },
  build: {
    outDir: 'dist', // 빌드된 파일의 출력 디렉토리 설정
    assetsDir: 'assets', // 정적 에셋의 출력 디렉토리 설정
    sourcemap: true, // 소스 맵 생성 여부 설정
    minify: 'terser', // 코드 최소화 설정
  },
  */
})

