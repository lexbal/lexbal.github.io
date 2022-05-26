import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import unDrawImage from '../../../assets/undraw_developer_activity_re_39tg.svg';
import Button from '../../Common/Button/Button';
import './Presentation.scss';

interface PresentationProps {}

const Presentation: FC<PresentationProps> = () => (
  <section className="Presentation page-bloc" id="Presentation" data-testid="Presentation">
    <div className="text-left">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Bonjour, je m'appelle</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Balle Alexandre</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Developpeur Fullstack</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">J'aime construire des applications web et mobile.</p>
        </ScrollAnimation>

        <Button type="custom" href="#Contact">Contacter moi</Button>
      </div>
      <div className="image-right">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <img src={unDrawImage} alt="unDrawImage"/>
        </ScrollAnimation>
      </div>
  </section>
);

export default Presentation;
