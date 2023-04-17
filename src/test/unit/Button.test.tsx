import '@testing-library/jest-dom';
import ButtonComponent from '@/components/Button';
import { render, testingUtils } from '../test-utils';
import { describe, test, vi } from 'vitest';

describe('ButtonComponent', () => {
	test('It should be able to render the button component when isHome is true with Access my list title', () => {
		const { getByText } = render(<ButtonComponent isHome />);
		expect(getByText('Access my list')).toBeInTheDocument();
	});

	test('It should be able to render the button component when isHome is false with Go back to home title', () => {
		const { getByText } = render(<ButtonComponent isHome={false} />);
		expect(getByText('Go back to home')).toBeInTheDocument();
	});

	test('It should be able to fire an event', () => {
		const handleOnClick = vi.fn();

		const { getByText } = render(
			<ButtonComponent onClick={handleOnClick} isHome />
		);
		testingUtils.fireEvent.click(getByText('Access my list'));

		expect(handleOnClick).toBeCalledTimes(1);
	});
});
