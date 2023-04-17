import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, test } from 'vitest';

import App from '../../App';

describe('App', () => {
	const { baseElement } = render(<App />);

	test('It should be able to render the App with chakraUi', () => {
		expect(baseElement.classList.contains('chakra-ui-light')).toBe(true);
	});

	test('It Should not be able to render the App with chakraUi', () => {
		expect(baseElement.classList.contains('')).toBe(false);
	});
});
