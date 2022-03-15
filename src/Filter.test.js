import { render, screen } from '@testing-library/react';
import Filter from './Filter';

test('renders an input text', () => {
  render(<Filter />);
  const helloWorld = screen.getByRole('textbox', { placeholder: /type word/i });
  expect(helloWorld).toBeInTheDocument();
});

test('renders an button to search', () => {
  render(<Filter />);
  const helloWorld = screen.getByRole('button', { value: /search/i });
  expect(helloWorld).toBeInTheDocument();
});
