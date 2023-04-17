import { useCallback, useEffect, useState } from 'react';
import { Flex, useToast } from '@chakra-ui/react';
import ButtonComponent from '@/components/Button';
import { IPokemonCardData } from '@/types';
import {
	fetchPokemonData,
	getPokemonCount,
	getPokemonUrls,
} from '@/helpers/api';
import BaseList from './components/BaseList';
import { useAppDispatch, useAppSelector } from '@/store';
import useLocalStorage from '@/hooks/useLocalStorage';
import {
	needPopulateReducer,
	populateFavoritesWithStorageReducer,
} from '@/store/slices/pokemonsSlice';

const List = () => {
	const toast = useToast();
	const [pokemonCount, setPokemonCount] = useState<number>(0);
	const [favorites, setFavoritesPokemonsInLocalStorage] =
		useLocalStorage('pokeapp::favorites');
	const [offset, setOffset] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [pokemonCards, setPokemonCards] = useState<IPokemonCardData[]>([]);

	const favoritePokemons = useAppSelector((state) => state.pokemons.pokemons);
	const needPopulate = useAppSelector((state) => state.pokemons.needPopulate);
	const dispatch = useAppDispatch();

	const numberPerPage = 20;
	const numberOfPages = Math.ceil(pokemonCount / numberPerPage);

	const fetchPokemonsContent = useCallback(async () => {
		try {
			setIsLoading(true);
			const urls = getPokemonUrls(offset, numberPerPage);
			const pokemonData = await fetchPokemonData(urls);

			setOffset(offset + numberPerPage);

			setPokemonCards((oldArray) => [...oldArray, ...pokemonData]);
		} catch (err) {
			toast({
				title: `Something went wrong, please try again later.`,
				status: 'error',
				isClosable: true,
			});
			// console.log(err);
		} finally {
			setIsLoading(false);
		}
	}, [currentPage]);

	useEffect(() => {
		const loadingPokemonCount = async () => {
			const count = await getPokemonCount();
			setPokemonCount(count);
		};

		loadingPokemonCount();
		fetchPokemonsContent();
	}, [currentPage, fetchPokemonsContent]);

	useEffect(() => {
		if (needPopulate) {
			dispatch(
				populateFavoritesWithStorageReducer(favorites as IPokemonCardData[])
			);
			dispatch(needPopulateReducer(!needPopulate));
		}

		const saveFavorites = () => {
			setFavoritesPokemonsInLocalStorage(favoritePokemons);
		};

		window.addEventListener('beforeunload', saveFavorites);
		return () => {
			window.removeEventListener('beforeunload', saveFavorites);
		};
	}, [favoritePokemons]);

	return (
		<Flex my={24} justifyContent={'center'} align={'center'}>
			<Flex flexDirection={'column'}>
				<ButtonComponent isHome={false} alignSelf={'flex-start'} />
				<BaseList pokemonCards={favoritePokemons} isFavoriteList />
				<BaseList
					pokemonCards={pokemonCards}
					isLoading={isLoading}
					currentPage={currentPage}
					numberOfPages={numberOfPages}
					onChangeCurrentPage={(currentPageNumber) =>
						setCurrentPage(currentPageNumber)
					}
				/>
			</Flex>
		</Flex>
	);
};

export default List;
