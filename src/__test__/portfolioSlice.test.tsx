import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Copyright from '../components/Copyright';

describe('Copyright component', () => {
  test('renders copyright text, link, and current year', () => {
    render(<Copyright />);

    // Check that the "Copyright ©" text is rendered.
    expect(screen.getByText(/Copyright ©/i)).toBeInTheDocument();

    // Check that the link with "Your Website" is rendered and has the correct href.
    const linkElement = screen.getByRole('link', { name: /Your Website/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://mui.com/');

    // Check that the current year is rendered.
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(currentYear)).toBeInTheDocument();
  });
});