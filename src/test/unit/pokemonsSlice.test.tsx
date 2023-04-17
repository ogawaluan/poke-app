import '@testing-library/jest-dom';
import { describe, test } from 'vitest';
import pokemonsReducer, {
	needPopulateReducer,
	populateFavoritesWithStorageReducer,
	toggleFavoritePokemonReducer,
} from '@/store/slices/pokemonsSlice';
import { initialState, pokemon } from '@/utils/consts';

describe('pokemonsSlice tests', () => {
	test('It should return the initialState', () => {
		expect(pokemonsReducer(undefined, { type: undefined })).toEqual({
			needPopulate: true,
			pokemons: [],
		});
	});

	test('It should toggle favorite pokemon', () => {
		expect(
			pokemonsReducer(initialState, toggleFavoritePokemonReducer(pokemon))
		).toEqual({
			needPopulate: true,
			pokemons: [pokemon],
		});

		const updatedState = {
			needPopulate: true,
			pokemons: [pokemon],
		};

		expect(
			pokemonsReducer(updatedState, toggleFavoritePokemonReducer(pokemon))
		).toEqual({
			needPopulate: true,
			pokemons: [],
		});
	});

	test('It should populate pokemons with received value', () => {
		const pokemons = [pokemon, pokemon];

		expect(
			pokemonsReducer(
				initialState,
				populateFavoritesWithStorageReducer(pokemons)
			)
		).toEqual({
			needPopulate: true,
			pokemons,
		});
	});

	test('It should update to false', () => {
		expect(pokemonsReducer(initialState, needPopulateReducer(false))).toEqual({
			needPopulate: false,
			pokemons: [],
		});
	});
});
