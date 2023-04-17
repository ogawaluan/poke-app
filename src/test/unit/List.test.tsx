import '@testing-library/jest-dom';
import { render } from '../test-utils';
import { describe, test } from 'vitest';
import List from '@/components/pages/List';

describe('List', () => {
	test('It should be able to render the List', () => {
		const { getByText } = render(<List />);

		expect(getByText('All the pokémons')).toBeInTheDocument();
	});
});
