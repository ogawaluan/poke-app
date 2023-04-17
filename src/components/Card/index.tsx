import { useState } from 'react';
import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import { RiSwordFill, RiShieldFill } from 'react-icons/ri';
import { IPokemonCardData, IPokemonCardProps } from '@/types';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavoritePokemonReducer } from '@/store/slices/pokemonsSlice';

const Card = ({ pokemon }: IPokemonCardProps) => {
	const favoritePokemons = useAppSelector((state) => state.pokemons.pokemons);
	const dispatch = useAppDispatch();

	const findFavoritePokemon = favoritePokemons.find(
		(favoritePokemon) => favoritePokemon.id === pokemon.id
	);

	const isFavorite = findFavoritePokemon?.isFavorite ?? false;

	const [showFavoriteButton, setShowFavoriteButton] = useState(false);
	const [filledHeart, setFilledHeart] = useState(isFavorite);

	const toggleFavoritePokemon = () => {
		const favoritePokemon: IPokemonCardData = {
			...pokemon,
			isFavorite: !pokemon.isFavorite,
		};

		dispatch(toggleFavoritePokemonReducer(favoritePokemon));
		setFilledHeart(!filledHeart);
	};

	return (
		<Flex
			bg="white"
			maxW={'176px'}
			borderRadius={'6px'}
			onMouseEnter={() => setShowFavoriteButton(true)}
			onMouseLeave={() => setShowFavoriteButton(false)}
			position={'relative'}
		>
			<Flex
				flexDirection="column"
				style={{ opacity: showFavoriteButton ? '0.1' : '1' }}
				w="100%"
			>
				<Flex p="10px">
					<Icon
						as={isFavorite ? IoMdHeart : IoMdHeartEmpty}
						color={isFavorite ? '#FF4040' : ''}
						h={'18px'}
						w={'18px'}
						mr={'8px'}
					/>
					<Heading as="h1" mr="24px" fontSize={'14px'}>
						{pokemon.name}
					</Heading>
					<Text
						bg="#f5f5f5"
						fontSize={'8px'}
						py="4px"
						px="6px"
						fontWeight={500}
						borderRadius={'13px'}
					>
						{pokemon.type}
					</Text>
				</Flex>
				<Image src={pokemon.img} alt="Pokemon Image" w="159px" h="auto" />
				<Flex
					bg={isFavorite ? '' : 'black'}
					bgGradient={isFavorite ? 'linear(to-r, #F0932E, #FFB72C)' : ''}
					py="11px"
					px="13px"
					borderTopRadius={'12px'}
					borderBottomRadius={'6px'}
					color="white"
					fontWeight={500}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Flex>
						<Icon as={RiSwordFill} mr={'4px'} />
						<Text fontSize={'10px'}>{pokemon.attack}</Text>
					</Flex>

					<Flex>
						<Icon as={RiShieldFill} mr={'4px'} />
						<Text fontSize={'10px'}>{pokemon.defense}</Text>
					</Flex>

					<Flex>
						<Icon as={GoPlus} mr={'4px'} />
						<Text fontSize={'10px'}>{pokemon.hp}</Text>
					</Flex>
				</Flex>
			</Flex>
			{showFavoriteButton && (
				<Box
					as="button"
					bg="transparent"
					display="flex"
					flexDirection={'column'}
					alignSelf={'center'}
					alignItems={'center'}
					mx="auto"
					position={'absolute'}
					right="0"
					left="0"
					_hover={{ opacity: 1 }}
					onClick={toggleFavoritePokemon}
				>
					<Box>
						<Icon
							as={filledHeart ? IoMdHeart : IoMdHeartEmpty}
							color={filledHeart ? '#FF4040' : ''}
							h={'40px'}
							w={'40px'}
						/>
					</Box>
					<Text fontWeight={700}>{isFavorite ? 'Unfavorite' : 'Favorite'}</Text>
				</Box>
			)}
		</Flex>
	);
};

export default Card;
