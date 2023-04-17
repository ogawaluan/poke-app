import { useToast } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

export default function useLocalStorage(
	key = '',
	initialValue: string | [] = '' ?? []
) {
	const toast = useToast();
	const [value, setValue] = useState(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			toast({
				title: `Something went wrong, please try again later.`,
				status: 'error',
				isClosable: true,
			});
			// console.log(error);
			return initialValue;
		}
	});

	const setStoredValue = useCallback(() => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			toast({
				title: `Something went wrong, please try again later.`,
				status: 'error',
				isClosable: true,
			});
			// console.log(error);
		}
	}, [value, key]);

	useEffect(() => {
		setStoredValue();
	}, [value, setStoredValue]);

	return [value, setValue];
}
