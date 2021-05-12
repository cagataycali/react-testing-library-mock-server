import { fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';

test('renders fetch characters button.', () => {
  const { getByTestId } = render(<App />);
  const fetchButton = getByTestId('fetch-button')
  expect(fetchButton).toBeInTheDocument()
});

test('when button click, api should be called and ui rendered properly.', async () => {
  const {getByTestId} = render(<App />);
  const fetchButton = getByTestId('fetch-button');

  // Click fetch button
  fireEvent.click(fetchButton)

  await waitFor(() => getByTestId('character'))
  const characterList = getByTestId('characters-list')
  expect(characterList.childElementCount).toBe(1)
  expect(characterList.firstChild.textContent).toBe(`test and origin, world`)
});
