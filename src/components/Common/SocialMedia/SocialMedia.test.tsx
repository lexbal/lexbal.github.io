import React from 'react';
import { render, screen } from '@testing-library/react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '@testing-library/jest-dom/extend-expect';
import SocialMedia from './SocialMedia';

describe('<SocialMedia />', () => {
  test('it should mount', () => {
    render(<SocialMedia href="http://www.test.com" icon={faCoffee}/>);
    
    const socialMedia = screen.getByTestId('SocialMedia');

    expect(socialMedia).toBeInTheDocument();
  });
});