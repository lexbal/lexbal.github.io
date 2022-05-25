import React, { FC } from 'react';
import './Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ligula nibh, <a href="https://www.goggle.com/">tempus</a> in tincidunt eget, faucibus sed lectus. Morbi nec nibh ipsum. Donec consectetur vestibulum bibendum. In ullamcorper sodales tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ornare pretium turpis eu ultricies. Morbi congue libero congue pharetra feugiat. Nam aliquam commodo libero, eget convallis sapien blandit a. Phasellus luctus euismod nisl sit amet volutpat. Nunc risus turpis, sodales placerat justo efficitur, convallis suscipit mi. Pellentesque sagittis tortor ac nunc eleifend, vel sagittis augue luctus. Cras varius venenatis metus, ac euismod lectus hendrerit auctor. Ut ac ex vel mauris sollicitudin tempus non nec elit. Maecenas non lacinia erat.
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
