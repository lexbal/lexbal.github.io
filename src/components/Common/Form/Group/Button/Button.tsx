import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => (
  <button className="Button" data-testid="Button">
    { children }
  </button>
);

export default Button;
