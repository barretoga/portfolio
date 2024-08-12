/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<
    object,
    object,
    any
  >
  export default component
}

interface ImportMetaEnv
  extends Readonly<Record<string, string>> {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
