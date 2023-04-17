import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { MdCatchingPokemon } from 'react-icons/md';
import Logo from '@assets/logo.svg';
import HomeBg from '@assets/home-bg.svg';
import ButtonComponent from '@/components/Button';
import { useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useAppSelector } from '@/store';

const Home = () => {
	const [_, setFavoritesPokemonsInLocalStorage] =
		useLocalStorage('pokeapp::favorites');
	const favoritePokemons = useAppSelector((state) => state.pokemons.pokemons);

	useEffect(() => {
		const saveFavorites = () => {
			setFavoritesPokemonsInLocalStorage(favoritePokemons);
		};

		window.addEventListener('beforeunload', saveFavorites);
		return () => {
			window.removeEventListener('beforeunload', saveFavorites);
		};
	}, []);

	return (
		<Flex w="100vw" h="100vh">
			<Flex
				flexDirection={'column'}
				m="64px"
				w="100%"
				maxW={'500px'}
				justify={'space-between'}
			>
				<Icon as={MdCatchingPokemon} w="62px" h="62px" color="#F0932E" />
				<Box>
					<Image src={Logo} alt="Logo" w="318px" h="auto" />
					<Text mt="24px" mb="47px">
						Create your custom team of Pokémon and become a true Pokémon master
						with our platform.
					</Text>
					<ButtonComponent w="100%" />
				</Box>
			</Flex>
			<Image
				src={HomeBg}
				alt="Home Background Image"
				w="100%"
				h="auto"
				fit={'cover'}
			/>
		</Flex>
	);
};

export default Home;
