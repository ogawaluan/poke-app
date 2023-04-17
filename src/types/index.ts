import { ButtonProps } from '@chakra-ui/react';

export interface IButtonProps extends ButtonProps {
	isHome?: boolean;
}

export interface IPokemonCount {
	count: number;
}

export interface IPokemonCardStats {
	base_stat: number;
}

export interface IPokemonCardType {
	type: {
		name: string;
	};
}

export interface IPokemonCardRawData {
	id: number;
	name: string;
	sprites: {
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
	stats: IPokemonCardStats[];
	types: IPokemonCardType[];
}

export interface IPokemonCardData {
	id: number;
	name: string;
	img: string;
	hp: number;
	attack: number;
	defense: number;
	type: string;
	isFavorite: boolean;
}

export interface IPokemonState {
	pokemons: IPokemonCardData[];
	needPopulate?: boolean;
}

export interface IPokemonCardProps {
	pokemon: IPokemonCardData;
}

export interface IBaseListProps {
	pokemonCards: IPokemonCardData[];
	isLoading?: boolean;
	isFavoriteList?: boolean;
	currentPage?: number;
	numberOfPages?: number;
	onChangeCurrentPage?: (currentPage: number) => void;
}
