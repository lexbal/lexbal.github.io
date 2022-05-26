import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Missions from './Missions';

describe('<Missions />', () => {
  test('it should mount', () => {
    render(<Missions />);
    
    const missions = screen.getByTestId('Missions');

    expect(missions).toBeInTheDocument();
  });
});