import React, { FC } from 'react';
import './Form.scss';

interface FormProps {
  children: React.ReactNode
}

const Form: FC<FormProps> = ({ children }) => (
  <form className="Form" data-testid="Form">
    {children}
  </form>
);

export default Form;
