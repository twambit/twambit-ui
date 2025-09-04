import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Footer from '../../src/components/Footer';

describe('Footer', () => {
  test('renders the About Us link', () => {
    // Render the component inside a MemoryRouter
    render(<Footer />, { wrapper: MemoryRouter });

    // Find the link by its accessible name (the text content)
    const aboutLink = screen.getByRole('link', { name: /About Us/i });

    // Assert that the link is in the document
    expect(aboutLink).toBeInTheDocument();

    // Assert that the link points to the correct URL
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  test('renders the Contact link', () => {
    // Render the component inside a MemoryRouter
    render(<Footer />, { wrapper: MemoryRouter });

    // Find the link by its accessible name
    const contactLink = screen.getByRole('link', { name: /Contact/i });

    // Assert that the link is in the document
    expect(contactLink).toBeInTheDocument();

    // Assert that the link points to the correct URL
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});
