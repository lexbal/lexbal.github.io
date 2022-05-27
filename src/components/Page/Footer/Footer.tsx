import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faLinkedin, faGithub, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';
import { FormattedMessage } from 'react-intl';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="Footer" data-testid="Footer">
    <a href="/" className="logo">
      <span><FormattedMessage id="short.firstname" /></span>
      <span><FormattedMessage id="short.lastname" /></span>
    </a>
    <div>
      <p>
        <FormattedMessage id="realised_with" /> <FontAwesomeIcon icon={faReact} className="react" /> <FormattedMessage id="and_more" />
      </p>
    </div>

    <div className="social-media">
      <a href="https://www.linkedin.com/in/#" target="_blank" rel="noreferrer" className='linkedIn'>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href="https://github.com/lexbal" target="_blank" rel="noreferrer" className='github'>
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.instagram.com/oni_lex_/" target="_blank" rel="noreferrer" className='instagram'>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      <a href="https://discord.com/users/#" target="_blank" rel="noreferrer" className='discord'>
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </a>
    </div>
  </div>
);

export default Footer;
