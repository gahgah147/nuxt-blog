// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt','@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  typescript: {
    typeCheck: true,
  },
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P',
    public: {
      apiBase: '/api',
      googleClientId: '181599956887-2tp2frmm6thmnrvqa2apemba6ntcshd5.apps.googleusercontent.com',
    },
    jwtSignSecret: 'PLEASE_REPLACE_WITH_YOUR_KEY',
  },
  build: {
    transpile: ['@headlessui/vue']
  },
  
});
