import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';

it('should show "Aberto" auto-complete item on screen', () => {
  render(<App />);
  const input = screen.getByTestId('test-auto-complete-input');
  expect(input).toBeInTheDocument();

  fireEvent.change(input, {
    target: {value: "Aberto"}
  })

  expect(screen.getByText('Aberto')).toBeInTheDocument()
});
