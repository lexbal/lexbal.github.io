import React, { FC } from 'react';
import './Header.scss';
import Navbar from '../../Common/Navbar/Navbar';
import Group from '../../Common/Navbar/Group/Group';
import Item from '../../Common/Navbar/Group/Item/Item';
import Brand from '../../Common/Navbar/Brand/Brand';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className="Header" data-testid="Header">
    <Navbar>
      <Brand>
        <span>Lex</span>
        <span>Bal</span>
      </Brand>
      <Group direction="right">
        <Item href="#Presentation">Présentation</Item>
        <Item href="#Projects">Projets</Item>
        <Item href="#Contact">Contact</Item>
      </Group>
    </Navbar>
  </div>
);

export default Header;