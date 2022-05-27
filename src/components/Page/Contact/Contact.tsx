import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import env from "react-dotenv";
import Button from '../../Common/Button/Button';
import Form from '../../Common/Form/Form';
import SubmitButton from '../../Common/Form/Group/Button/Button';
import Group from '../../Common/Form/Group/Group';
import Input from '../../Common/Form/Group/Input/Input';
import Textarea from '../../Common/Form/Group/Textarea/Textarea';
import Label from '../../Common/Label/Label';
import './Contact.scss';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(e.target[0].value)
  };

  return (
    <section className="Contact page-bloc" id="Contact" data-testid="Contact">
      <h3><FormattedMessage id="contact_me" /></h3>

      <div className="description">
        <FormattedMessage id="contact_info" />
      </div>

      <div className="informations">
        <Button type="custom" href={"tel:+336" + env.TEL}>{"+336" + env.TEL}</Button>
        <Button type="custom" href={"mailto:" + env.EMAIL}>{env.EMAIL}</Button>
      </div>

      <Form handleSubmit={handleSubmit}>
        <Group>
          <Label><FormattedMessage id="your_email" /></Label>
          <Input type='text' name='email' placeholder='Email' />
        </Group>
        <Group>
          <Label><FormattedMessage id="your_message" /></Label>
          <Textarea name='message' placeholder='Message' />
        </Group>
        <SubmitButton><FormattedMessage id="send" /></SubmitButton>
      </Form>
    </section>
  );
};

export default Contact;
