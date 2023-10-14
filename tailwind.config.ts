import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				bg: '#fefcf0',
				primary: '#009F69',
				secondary: '#E85294',
				bgsecondary: '#0b4d28',
				error: '#9F0000'
			},
			screens: {
				iphonexr: { raw: '(min-height: 800px),(min-width:300px)' }
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'hamlindigo',
						enhancements: true
					}
				]
			}
		})
	]
} satisfies Config;
