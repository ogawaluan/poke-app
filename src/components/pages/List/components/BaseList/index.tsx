import {
	Button,
	Flex,
	Grid,
	Icon,
	Link,
	Spinner,
	Text,
} from '@chakra-ui/react';
import { IBaseListProps } from '@/types';
import { GoBook } from 'react-icons/go';
import Card from '@/components/Card';
import { MdCatchingPokemon } from 'react-icons/md';

const BaseList = ({
	pokemonCards,
	isLoading,
	isFavoriteList = false,
	currentPage,
	numberOfPages,
	onChangeCurrentPage,
}: IBaseListProps) => {
	const fetchMore = () => {
		if (currentPage && onChangeCurrentPage) {
			onChangeCurrentPage(currentPage + 1);
		}
	};

	const lastPage = currentPage === numberOfPages;

	return (
		<Flex flexDir={'column'} id="top">
			<Flex align={'center'} mt="48px" mb="16px">
				<Icon
					as={isFavoriteList ? MdCatchingPokemon : GoBook}
					w="24px"
					h="24px"
					mr={'12px'}
				/>
				<Text>
					{isFavoriteList ? 'Your favorite pokémon' : 'All the pokémons'}
				</Text>
			</Flex>
			<Grid
				bg="#f5f5f5"
				py="24px"
				px="16px"
				borderRadius={'14px'}
				templateColumns={{
					xl: 'repeat(6, 1fr)',
					lg: 'repeat(4, 1fr)',
					md: 'repeat(3, 1fr)',
					sm: 'repeat(2, 1fr)',
				}}
				gap={6}
			>
				{pokemonCards.map((pokemon, index) => (
					<Card key={index} pokemon={pokemon} />
				))}
				{isLoading && <Spinner m="auto" />}
			</Grid>

			{!isFavoriteList && !lastPage && (
				<Button onClick={fetchMore} alignSelf={'center'} mt="24px">
					Load more
				</Button>
			)}
			{!isFavoriteList && (
				<Link href="#top" alignSelf={'center'} mt="24px">
					<Button>Go to top</Button>
				</Link>
			)}
		</Flex>
	);
};

export default BaseList;
