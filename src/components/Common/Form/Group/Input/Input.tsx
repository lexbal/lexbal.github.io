import React, { FC } from 'react';
import './Input.scss';

interface InputProps {
  type: string,
  placeholder: string,
  name: string
}

const Input: FC<InputProps> = ({ type, placeholder, name }) => (
  <input type={type} name={name} placeholder={placeholder} className="Input" data-testid="Input" />
);

export default Input;
