import React, { FC } from 'react';
import './Navbar.scss';

interface NavbarProps {
  children: React.ReactNode
}

const Navbar: FC<NavbarProps> = ({ children }) => (
  <nav className="Navbar" data-testid="Navbar">
    {children}
  </nav>
);

export default Navbar;
