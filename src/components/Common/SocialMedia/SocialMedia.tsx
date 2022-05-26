import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialMedia.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialMediaProps {
  icon: IconDefinition,
  href: string
}

const SocialMedia: FC<SocialMediaProps> = ({icon, href}) => (
  <a href={href} className="SocialMedia" data-testid="SocialMedia">
    <FontAwesomeIcon icon={icon}/>
  </a>
);

export default SocialMedia;
