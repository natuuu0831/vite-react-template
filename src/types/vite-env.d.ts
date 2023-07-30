/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV: 'prd' | 'stg' | 'dev' | 'local'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
