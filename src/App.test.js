import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const handleAddButtonClick = screen.getAllByTestId('Add-1');
  expect(handleAddButtonClick).toBeInTheDocument();
});
