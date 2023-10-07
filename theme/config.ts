import { ThemeDefinition } from 'vuetify';

const LightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#ebebeb',
    surface: '#ffffff',
    primary: '#5D87FF',
    secondary: '#26A69A',
    error: '#C10015',
    info: '#31CCEC',
    success: '#21BA45',
    warning: '#ffbe4e',
  },
};

export const vuetifyConfig = {
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
};
