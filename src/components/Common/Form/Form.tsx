import React, { FC, FormEventHandler } from 'react';
import './Form.scss';

interface FormProps {
  handleSubmit: FormEventHandler,
  children: React.ReactNode
}

const Form: FC<FormProps> = ({ children, handleSubmit }) => (
  <form className="Form" data-testid="Form" onSubmit={handleSubmit}>
    {children}
  </form>
);

export default Form;
