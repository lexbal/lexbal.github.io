import React, { FC } from 'react';
import './Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';

interface ProjectProps {}

const Project: FC<ProjectProps> = () => (
  <ScrollAnimation animateIn="flipInX">
    <div className="Project">
      <header>
        <FontAwesomeIcon icon={faFolder} size="3x" />
        <div className="project-links">
          <a href="https://github.com/lexbal" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </header>
      <div className="body">
        <h3>Project</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ligula nibh, <a href="https://www.goggle.com/">tempus</a> in tincidunt eget, faucibus sed lectus.
        </p>
      </div>
      <footer>
        <ul className="tech-list">
          <li>Node</li>
          <li>Express</li>
          <li>MySql</li>
          <li>Ejs</li>
        </ul>
      </footer>
    </div>
  </ScrollAnimation>
);

export default Project;
