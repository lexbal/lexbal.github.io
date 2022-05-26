import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bloc from './Bloc';

describe('<Bloc />', () => {
  test('it should mount', () => {
    render(<Bloc size='small'>Test</Bloc>);
    
    const bloc = screen.getByTestId('Bloc');

    expect(bloc).toBeInTheDocument();
  });
});