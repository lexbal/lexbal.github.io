import React, { FC } from 'react';
import './Textarea.scss';

interface TextareaProps {
  name: string,
  placeholder: string
}

const Textarea: FC<TextareaProps> = ({ name, placeholder }) => (
  <textarea
    className="Textarea" 
    data-testid="Textarea"
    placeholder={placeholder}
    name={name}
  />
);

export default Textarea;
