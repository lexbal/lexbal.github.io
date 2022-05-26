import React, { FC } from 'react';
import Project from './Project/Project';
import './Projects.scss';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
  <section className="Projects" id="Projects" data-testid="Projects">
    <h2>Mes projets</h2>

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
