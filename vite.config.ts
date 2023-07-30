import path from 'path'
import { defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { InlineConfig } from 'vitest'
interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const { VITE_ENV } = env
  const isProduction = VITE_ENV === 'prd'

  return {
    base: '/',
    build: {
      outDir: './dist',
      emptyOutDir: true,
      //本番ではsourcemapは出力しない
      sourcemap: !isProduction,
    },
    server: {
      host: true,
      open: false,
    },
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '@/': path.join(__dirname, 'src/'),
        '~/': path.join(__dirname, 'public/'),
      },
    },
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'info' },
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      onConsoleLog: (_, type) => (type === 'stderr' ? false : undefined),
      coverage: {
        provider: 'c8',
        all: true, // 未テストのコードもカバレッジに含める
      },
    },
  }
}) as VitestConfigExport
