import { combineReducers } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemonsSlice';

const rootReducer = combineReducers({
	pokemons: pokemonsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
