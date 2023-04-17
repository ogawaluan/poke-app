import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '@/styles/theme';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/store/slices';
import { pokemonsFavoritesMock } from '@/utils/consts';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
	const testStore = configureStore({
		reducer: rootReducer,
		preloadedState: {
			pokemons: { pokemons: pokemonsFavoritesMock, needPopulate: false },
		},
	});

	return (
		<ChakraProvider theme={theme}>
			<Provider store={testStore}>
				<BrowserRouter>{children}</BrowserRouter>
			</Provider>
		</ChakraProvider>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * as testingUtils from '@testing-library/react';
export { customRender as render };
