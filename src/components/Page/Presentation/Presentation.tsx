import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { FormattedMessage } from 'react-intl';
import unDrawImage from '../../../assets/undraw_developer_activity_re_39tg.svg';
import Button from '../../Common/Button/Button';
import { Link } from "react-scroll";
import './Presentation.scss';

interface PresentationProps {}

const Presentation: FC<PresentationProps> = () => (
  <section className="Presentation page-bloc" id="Presentation" data-testid="Presentation">
    <div className="text-left">
        <ScrollAnimation animateIn="fadeInUp">
          <p><FormattedMessage id="hello" /></p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1><FormattedMessage id="name" /></h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3><FormattedMessage id="job" /></h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume"><FormattedMessage id="description" /></p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
          >
            <Button type="custom" href="#Contact"><FormattedMessage id="contact_me" /></Button>
          </Link>
        </ScrollAnimation>
      </div>
      <div className="image-right">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <img src={unDrawImage} alt="unDrawImage"/>
        </ScrollAnimation>
      </div>
  </section>
);

export default Presentation;
