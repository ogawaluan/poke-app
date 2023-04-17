import '@testing-library/jest-dom';
import { render } from '../test-utils';
import { describe, test } from 'vitest';
import BaseList from '@/components/pages/List/components/BaseList';
import { basePokemons, pokemonsFavoritesMock } from '@/utils/consts';

describe('BaseListComponent', () => {
	test('It should be able to render the BaseList with base pokemons', () => {
		const { getAllByText } = render(<BaseList pokemonCards={basePokemons} />);

		const pokemonsCards = getAllByText('foo');

		expect(pokemonsCards.length).toEqual(basePokemons.length);
	});

	test('It should be able to render the BaseList with base pokemons', () => {
		const { getAllByText } = render(
			<BaseList pokemonCards={pokemonsFavoritesMock} />
		);

		const pokemonsCards = getAllByText('foo2');

		expect(pokemonsCards.length).toEqual(pokemonsFavoritesMock.length);
	});
});
