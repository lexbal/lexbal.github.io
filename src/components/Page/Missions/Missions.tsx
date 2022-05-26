import React, { FC } from 'react';
import Bloc from '../../Common/Bloc/Bloc';
import Row from '../../Common/Container/Row/Row';
import './Missions.scss';
import img from '../../../assets/work1.png';
import Image from '../../Common/Image/Image';

interface MissionsProps {}

const Missions: FC<MissionsProps> = () => (
  <div className="Missions page-bloc" data-testid="Missions">
    <Row>
      <Bloc size='small'>
        <Image src={img} />
        <div className='link'><a href="#">Test</a></div>
      </Bloc>
      <Bloc size='small'>
        test
      </Bloc>
      <Bloc size='small'>
        test
      </Bloc>
    </Row>
    
  </div>
);

export default Missions;
