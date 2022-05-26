import React, { FC } from 'react';
import SocialMedia from '../../Common/SocialMedia/SocialMedia';
import { faGitAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Presentation.scss';

interface PresentationProps {}

const Presentation: FC<PresentationProps> = () => (
  <div className="Presentation page-bloc fade-in" data-testid="Presentation">
    <h5>Bonjour, je m'appelle Alexandre 👋</h5>
    <h1>Fullstack Developer</h1>
    <div className="description">
      J'aime construire des applications web et mobile.
    </div>
    <div className="social-media">
      <SocialMedia icon={faGitAlt} href="https://github.com/lexbal" />
      <SocialMedia icon={faLinkedinIn} href="https://www.linkedin.com/in/alexandre-balle-199b36161/?originalSubdomain=fr" />
    </div>
  </div>
);

export default Presentation;
