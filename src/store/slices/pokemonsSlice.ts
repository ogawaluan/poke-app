import { IPokemonCardData } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/utils/consts';

export const PokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		toggleFavoritePokemonReducer: (
			state,
			action: PayloadAction<IPokemonCardData>
		) => {
			const isPokemonFavorite = state.pokemons.find(
				(pokemon) => pokemon.id === action.payload.id
			);

			if (isPokemonFavorite) {
				return {
					...state,
					pokemons: state.pokemons.filter(
						(pokemon) => pokemon.id != action.payload.id
					),
				};
			} else {
				state.pokemons.push({
					id: action.payload.id,
					name: action.payload.name,
					img: action.payload.img,
					hp: action.payload.hp,
					attack: action.payload.attack,
					defense: action.payload.defense,
					type: action.payload.type,
					isFavorite: action.payload.isFavorite,
				});
			}
		},
		populateFavoritesWithStorageReducer: (
			state,
			action: PayloadAction<IPokemonCardData[]>
		) => ({ ...state, pokemons: [...state.pokemons, ...action.payload] }),
		needPopulateReducer: (state, action: PayloadAction<boolean>) => ({
			...state,
			needPopulate: action.payload,
		}),
	},
});

const pokemonsReducer = PokemonsSlice.reducer;

export const {
	toggleFavoritePokemonReducer,
	populateFavoritesWithStorageReducer,
	needPopulateReducer,
} = PokemonsSlice.actions;
export default pokemonsReducer;
