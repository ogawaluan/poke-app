import { IPokemonCardData, IPokemonCardRawData, IPokemonCount } from '@/types';

export const getPokemonUrls = (offset: number, numbersPerPage: number) => {
	const pokemonUrls: string[] = [];

	for (let i = offset; i < offset + numbersPerPage; i++) {
		pokemonUrls.push(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`);
	}

	return pokemonUrls;
};

export const getPokemonCount = async () => {
	const responseCount = await fetch('https://pokeapi.co/api/v2/pokemon/');
	const { count } = (await responseCount.json()) as IPokemonCount;

	return count;
};

export const fetchPokemonData = async (pokemonUrls: string[]) => {
	const pokemonData = await Promise.all(
		pokemonUrls.map(async (url) => {
			const pokemonDataResponse = await fetch(url);

			return pokemonDataResponse.json() as Promise<IPokemonCardRawData>;
		})
	);

	const parsedPokemonData = pokemonData.map((pokemon) => {
		const parsePokemonCardData: IPokemonCardData = {
			id: pokemon.id,
			name: pokemon.name,
			img: pokemon.sprites.other['official-artwork'].front_default,
			hp: pokemon.stats[0].base_stat,
			attack: pokemon.stats[1].base_stat,
			defense: pokemon.stats[2].base_stat,
			type: pokemon.types[0].type.name,
			isFavorite: false,
		};

		return parsePokemonCardData;
	});

	return parsedPokemonData;
};
