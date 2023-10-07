import { vuetifyConfig } from './theme/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  app: {
    keepalive: true,
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  imports: {
    dirs: ['stores'],
  },
  vue: {
    propsDestructure: true,
  },
  vuetify: {
    ...vuetifyConfig,
  },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
  ],
});
