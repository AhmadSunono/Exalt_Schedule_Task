import {
	render,
	screen,
	waitForElementToBeRemoved
} from '@testing-library/react';
import App from './App';

describe('Testing App', () => {
	test('loading', async () => {
		render(<App />);
		const loading = screen.getByText('Loading');

		expect(loading).toBeInTheDocument();

		await waitForElementToBeRemoved(() => screen.getByText('Loading'));

		expect(screen.getByText('Potato')).toBeInTheDocument();
	});
});
