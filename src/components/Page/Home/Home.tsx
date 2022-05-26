import React, { FC } from 'react';
import Contact from '../Contact/Contact';
import Presentation from '../Presentation/Presentation';
import Projects from '../Projects/Projects';
import './Home.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="Home" data-testid="Home">
    <Presentation />
    <Projects />
    <Contact />
  </div>
);

export default Home;