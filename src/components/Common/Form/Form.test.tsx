import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';

describe('<Form />', () => {
  test('it should mount', () => {
    const handleSubmit = () => {};
    render(<Form handleSubmit={handleSubmit}>Test</Form>);
    
    const form = screen.getByTestId('Form');

    expect(form).toBeInTheDocument();
  });
});