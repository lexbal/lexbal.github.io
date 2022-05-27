import React, { FC } from 'react';
import Form from '../../Common/Form/Form';
import Button from '../../Common/Form/Group/Button/Button';
import Group from '../../Common/Form/Group/Group';
import Input from '../../Common/Form/Group/Input/Input';
import Textarea from '../../Common/Form/Group/Textarea/Textarea';
import Label from '../../Common/Label/Label';
import './Contact.scss';

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <section className="Contact page-bloc" id="Contact" data-testid="Contact">
    <Form>
      <Group>
        <Label>Votre email :</Label>
        <Input type='text' name='email' placeholder='Email' />
      </Group>
      <Group>
        <Label>Votre message :</Label>
        <Textarea name='message' placeholder='Message' />
      </Group>
      <Button>Envoyer</Button>
    </Form>
  </section>
);

export default Contact;
