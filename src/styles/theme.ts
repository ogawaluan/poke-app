import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		black: '#2a2a2a',
	},
	fonts: {
		heading: 'Inter',
		body: 'Inter',
	},
	styles: {
		global: {
			body: {
				bg: 'white',
				color: 'black',
			},
		},
	},
});
