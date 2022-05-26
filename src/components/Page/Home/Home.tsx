import React, { FC } from 'react';
import Missions from '../Missions/Missions';
import Presentation from '../Presentation/Presentation';
import './Home.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="Home" data-testid="Home">
    <Presentation />
    <Missions />
  </div>
);

export default Home;