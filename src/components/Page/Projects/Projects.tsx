import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import Project from './Project/Project';
import './Projects.scss';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  const projects = [
    {
      name: "HumanAid",
      links: [
        {value: "https://github.com/lexbal/HumanAid_FO"},
        {value: "https://github.com/lexbal/HumanAid_BO"}
      ],
      description: "Projet scolaire qui vise à combler un besoin associatif. Le but de celui-ci était d'aporter de la visibilité au association humanitaire.",
      techList: [
        {name: 'Symfony'},
        {name: 'React'},
        {name: 'Nodejs'},
        {name: 'Express'},
        {name: 'MySQL'},
      ]
    },
  ];

  return (
    <section className="Projects" id="Projects" data-testid="Projects">
      <h3><FormattedMessage id="my_projects" /></h3>

      <div id="project-list">
        {
          projects.map(({name, links, description, techList}, i) =>
            <Project key={i} name={name} links={links} description={description} techList={techList} />
          )
        }
      </div>
    </section>
  );
};

export default Projects;
