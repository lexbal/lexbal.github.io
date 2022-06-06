import React, { FC } from 'react';
import './Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';

interface ProjectProps {
  name: string, 
  links: Array<any>, 
  description: string, 
  techList: Array<any>
}

const Project: FC<ProjectProps> = ({ name, links, description, techList }) => (
  <ScrollAnimation animateIn="flipInX">
    <div className="Project">
      <header>
        <FontAwesomeIcon icon={faFolder} size="3x" />
        <div className="project-links">
          {
            links.map(({value}, i) =>
              <a href={value} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            )
          }
        </div>
      </header>
      <div className="body">
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
      <footer>
        <ul className="tech-list">
          {
            techList.map(({name}, i) =>
              <li key={i}>
                {name}
              </li>
            )
          }
        </ul>
      </footer>
    </div>
  </ScrollAnimation>
);

export default Project;
