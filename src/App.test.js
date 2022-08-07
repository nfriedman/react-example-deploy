import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my text', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is my app, super excited to deploy this/i);
  expect(linkElement).toBeInTheDocument();
});
