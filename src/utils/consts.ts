import { IPokemonCardData, IPokemonState } from '@/types';

export const initialState: IPokemonState = {
	pokemons: [],
	needPopulate: true,
};

export const pokemon: IPokemonCardData = {
	id: 1,
	name: 'foo',
	img: 'foo.jpg',
	attack: 10,
	defense: 10,
	hp: 10,
	type: 'fire',
	isFavorite: false,
};

export const favoritePokemonMockData: IPokemonCardData = {
	id: 2,
	name: 'foo2',
	img: 'foo2.jpg',
	attack: 10,
	defense: 10,
	hp: 10,
	type: 'grass',
	isFavorite: true,
};

export const pokemonsFavoritesMock: IPokemonCardData[] = new Array(5).fill(
	favoritePokemonMockData
);

export const basePokemons: IPokemonCardData[] = new Array(5).fill(pokemon);
