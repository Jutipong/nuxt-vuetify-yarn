import { LightTheme } from './theme/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	typescript: {
		shim: false,
	},
	imports: {
		dirs: ['stores'],
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},
	vuetify: {
		vuetifyOptions: {
			theme: {
				defaultTheme: 'LightTheme',
				themes: {
					LightTheme,
				},
			},
		},
	},

	modules: ['@invictus.codes/nuxt-vuetify', '@pinia/nuxt'],
});
