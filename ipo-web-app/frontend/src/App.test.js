import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bluestock logo', () => {
  render(<App />);
  const logoText = screen.getByAltText(/bluestock logo/i);
  expect(logoText).toBeInTheDocument();
});
