import '@testing-library/jest-dom';
import { testingUtils } from '../test-utils';
import { describe, test } from 'vitest';
import useLocalStorage from '@/hooks/useLocalStorage';

describe('useLocalStorage hook', () => {
	test('It should be able to save a value in local storage', async () => {
		const key = 'testKey';
		const initialValue = 'testValue';
		const { result } = testingUtils.renderHook(() =>
			useLocalStorage(key, initialValue)
		);
		const [value, setValue] = result.current;
		const newValue = 'newTestValue';

		expect(value).toBe(initialValue);

		await testingUtils.waitFor(() => setValue(newValue));

		const storedValue = JSON.parse(localStorage.getItem(key) as string);

		expect(storedValue).toBe(newValue);
	});
});
