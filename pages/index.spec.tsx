import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Home Component', () => {
  it('renders the Home component with NavigationBar, Banner, and Footer', () => {
    render(<Home />);

    const navbarElement = screen.getByTestId('navbar');
    const bannerElement = screen.getByTestId('banner');
    const footerElement = screen.getByTestId('footer');

    expect(navbarElement).toBeInTheDocument();
    expect(bannerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
});