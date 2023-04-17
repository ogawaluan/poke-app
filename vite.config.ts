/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
	server: {
		host: true,
		port: 3000,
	},
});
