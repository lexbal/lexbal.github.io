import React, { FC } from 'react';
import { Link } from "react-scroll";
import './Header.scss';
import Navbar from '../../Common/Navbar/Navbar';
import Group from '../../Common/Navbar/Group/Group';
import Item from '../../Common/Navbar/Group/Item/Item';
import Brand from '../../Common/Navbar/Brand/Brand';
import { FormattedMessage } from 'react-intl';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className="Header" data-testid="Header">
    <Navbar>
      <Brand>
        <Link
            activeClass="active"
            to="Presentation"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <span><FormattedMessage id="short.firstname" /></span>
          <span><FormattedMessage id="short.lastname" /></span>
        </Link>
      </Brand>
      <Group direction="right">
        <Link
            activeClass="active"
            to="Presentation"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <Item href="#Presentation">
            <FormattedMessage id="presentation" />
          </Item>
        </Link>
        <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <Item href="#Projects">
            <FormattedMessage id="projects" />
          </Item>
        </Link>
        <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          <Item href="#Contact">
            <FormattedMessage id="contact" />
          </Item>
        </Link>
      </Group>
    </Navbar>
  </div>
);

export default Header;