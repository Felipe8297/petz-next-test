import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Banner from './index';

describe('Banner Component', () => {
  it('renders the Banner component with the correct text', () => {
    const { getByText } = render(<Banner/>)
    
    const textElement = getByText('Cuidamos bem do seu pokémon, para ele cuidar bem de você');
    expect(textElement).toBeInTheDocument();
  });

  it('has the correct CSS styles for Banner', () => {
    const { container } = render(<Banner/>);
    
    // Verifica as propriedades CSS geradas pelo Styled Components
    const banner = container.firstChild;
    expect(banner).toHaveStyle('background: url("/images/pokemon-hero.jpg") no-repeat center');
    expect(banner).toHaveStyle('background-size: cover');
    expect(banner).toHaveStyle('display: flex');
    expect(banner).toHaveStyle('justify-content: center');
    expect(banner).toHaveStyle('align-items: center');
    expect(banner).toHaveStyle('text-align: center');
  });

  it('has the correct CSS styles for Text', () => {
    const { container } = render(<Banner />);
    
    // Substitua os valores com os reais usados em seu componente Text
    const text = container.querySelector('div'); // Ou use uma classe específica, se aplicável
    expect(text).toHaveStyle('width: 509px');
    expect(text).toHaveStyle('line-height: 38.73px');
    expect(text).toHaveStyle('font-size: seu-tamanho-de-fonte');
    expect(text).toHaveStyle('font-weight: seu-peso-de-fonte');
    expect(text).toHaveStyle('color: sua-cor');
  });
});