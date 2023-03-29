import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			smartypants: {
				quotes: true,
				ellipses: true,
				backticks: false,
				dashes: 'inverted'
			},
			rehypePlugins: [rehypeSlug]
		})
	],
	kit: {
		adapter: adapter({
			pages: 'dist'
		}),
		alias: {
			'@site': './src'
		}
	}
};

export default config;
