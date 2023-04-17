import '@testing-library/jest-dom';
import { render, testingUtils } from '../test-utils';
import { describe, test } from 'vitest';
import Card from '@/components/Card';
import { favoritePokemonMockData, pokemon } from '@/utils/consts';

describe('CardComponent', () => {
	test('It should be able to render card with mocked pokemon data', () => {
		const { getByText } = render(<Card pokemon={pokemon} />);

		expect(getByText('foo')).toBeInTheDocument();
	});

	test('It should be able to render the favorite hover when the mouse is over the card', async () => {
		const { getByText } = render(<Card pokemon={pokemon} />);
		testingUtils.fireEvent.mouseOver(getByText('foo'));
		const button = await testingUtils.waitFor(() =>
			testingUtils.screen.getByText('Favorite')
		);

		expect(button).toBeInTheDocument();
	});

	test('It should be able to render favorite card with mocked pokemon data', () => {
		const { getByText } = render(<Card pokemon={favoritePokemonMockData} />);

		expect(getByText('foo2')).toBeInTheDocument();
	});

	test('It should be able to render the unfavorite hover when the mouse is over the card', async () => {
		const { getByText } = render(<Card pokemon={favoritePokemonMockData} />);
		testingUtils.fireEvent.mouseOver(getByText('foo2'));
		const button = await testingUtils.waitFor(() =>
			testingUtils.screen.getByText('Unfavorite')
		);

		expect(button).toBeInTheDocument();
	});

	test('It should toggle information between favorite or unfavorite when click the button', async () => {
		const { getByText } = render(<Card pokemon={favoritePokemonMockData} />);
		testingUtils.fireEvent.mouseOver(getByText('foo2'));

		const button = await testingUtils.waitFor(() =>
			testingUtils.screen.getByText('Unfavorite')
		);

		testingUtils.fireEvent.click(button);

		const buttonFavorite = await testingUtils.waitFor(() =>
			testingUtils.screen.getByText('Favorite')
		);

		expect(buttonFavorite).toBeInTheDocument();
	});

	test('It should render the favorite style in card component when pokemon is favorited', () => {
		const { getByText } = render(<Card pokemon={favoritePokemonMockData} />);

		expect(getByText('foo2')).toHaveStyle({
			backgroundImage: 'linear-gradient(to-right, #F0932E, #FFB72C)',
		});
	});
});
