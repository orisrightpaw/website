import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				cirro: '#c4bef3'
			}
		}
	},

	plugins: []
} satisfies Config;
