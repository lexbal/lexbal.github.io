import { faGitAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React, { FC } from 'react';
import SocialMedia from '../../Common/SocialMedia/SocialMedia';
import './Footer.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className="Footer" data-testid="Footer">
    <SocialMedia icon={faLinkedinIn} href="#"/>
    <SocialMedia icon={faGitAlt} href="https://github.com/lexbal"/>
  </footer>
);

export default Footer;
