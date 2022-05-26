import React, { FC } from 'react';
import './Contact.scss';

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <section className="Contact page-bloc" id="Contact" data-testid="Contact">
    Contact Component
  </section>
);

export default Contact;
