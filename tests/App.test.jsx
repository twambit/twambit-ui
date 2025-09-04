import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  test('renders heading', () => {
    render(<App />);
    const heading = screen.getByText(/Twambit - Safe way to chat with humans, no AI/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders VideoChat component', () => {
    render(<App />);
    // You can check for an element from VideoChat, e.g., a button or video element
    // Example (update selector as needed based on VideoChat implementation):
    // const videoElement = screen.getByTestId('local-video');
    // expect(videoElement).toBeInTheDocument();
  });
});