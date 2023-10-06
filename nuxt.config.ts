import { LightTheme } from './theme/config';

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
  appConfig: {
    nuxtIcon: {
      size: '20px',
    },
  },
  vuetify: {
    vuetifyOptions: {
      ssr: false,
      theme: {
        defaultTheme: 'LightTheme',
        themes: {
          LightTheme,
        },
      },
      defaults: {
        VContainer: {
          fluid: true,
        },
        VBtn: {
          variant: 'flat',
          rounded: '0',
        },
        VCard: {
          VBtn: {
            variant: 'flat',
            rounded: '0',
          },
        },
        VCardActions: {
          VBtn: {
            variant: 'flat',
            rounded: '0',
          },
        },
        VTextField: {
          hideDetails: 'auto',
          density: 'compact',
          dirty: true,
          variant: 'outlined',
        },
        VDataTableServer: {
          density: 'comfortable',
          hover: true,
        },
      },
    },
    moduleOptions: {
      useVuetifyLabs: true,
    },
  },
  modules: ['@invictus.codes/nuxt-vuetify', '@pinia/nuxt', 'nuxt-icon'],
});
