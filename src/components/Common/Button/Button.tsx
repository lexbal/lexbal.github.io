import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  type: string,
  href: string,
  children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ children, href, type }) => (
  <a className={"Button " + type} href={href ? href : "/"} data-testid="Button">
    {children}
  </a>
);

export default Button;
