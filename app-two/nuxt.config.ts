// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/app/demo-app-two/' : '/',
  },
  ssr: false,
  typescript: {
    shim: false
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  nitro: {
    serveStatic: true,
  },
  devServerHandlers: [],
  hooks: {
  },
  // https://nuxt.com/docs/api/configuration/nuxt-config
  modules: [
    '@pinia/nuxt'
  ],
  plugins: [
    { src: '~/plugins/vuetify.ts', mode: 'client' },
    { src: '~/plugins/keycloak.ts', mode: 'client' },
  ],
  runtimeConfig: {
    KEYCLOAK_URL: process.env.KEYCLOAK_URL,
    KEYCLOAK_REALM: process.env.KEYCLOAK_REALM,
    KEYCLOAK_CLIENT_ID: process.env.KEYCLOAK_CLIENT_ID,
  },
})

