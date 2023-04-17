import '@testing-library/jest-dom';
import { render } from '../test-utils';
import { describe, test } from 'vitest';

import Home from '@/components/pages/Home';

describe('Home', () => {
	test('It should be able to render the Home', () => {
		const { getByText } = render(<Home />);

		expect(
			getByText(
				'Create your custom team of Pokémon and become a true Pokémon master with our platform.'
			)
		).toBeInTheDocument();
	});
});
