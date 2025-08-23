import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders WebRTC Video Chat heading', () => {
    render(<App />);
    const heading = screen.getByText(/WebRTC Video Chat/i);
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