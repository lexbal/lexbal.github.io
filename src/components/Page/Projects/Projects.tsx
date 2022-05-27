import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Project from './Project/Project';
import './Projects.scss';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
  <section className="Projects" id="Projects" data-testid="Projects">
    <h3><FormattedMessage id="my_projects" /></h3>

    <div id="project-list">
      <Project/>
      <Project/>
      <Project/>
      <Project/>      
      <Project/>
      <Project/>
    </div>
  </section>
);

export default Projects;
