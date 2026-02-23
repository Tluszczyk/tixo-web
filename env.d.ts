/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Define your variables here
  readonly VITE_APPWRITE_API_URL: string
  readonly VITE_APPWRITE_PROJECT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
