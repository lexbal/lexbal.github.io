import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Brand from './Brand';

describe('<Brand />', () => {
  test('it should mount', () => {
    render(<Brand>Test</Brand>);
    
    const brand = screen.getByTestId('Brand');

    expect(brand).toBeInTheDocument();
  });
});