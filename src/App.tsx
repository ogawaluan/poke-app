import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ChakraProvider } from '@chakra-ui/react';

import Home from '@components/pages/Home';
import List from '@components/pages/List';
import { theme } from './styles/theme';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/list',
		element: <List />,
	},
]);

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ChakraProvider>
	);
};

export default App;
