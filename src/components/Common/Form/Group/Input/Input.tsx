import React, { FC } from 'react';
import './Input.scss';

interface InputProps {
  type: string
}

const Input: FC<InputProps> = ({ type }) => (
  <input type={type} className="Input" data-testid="Input" />
);

export default Input;
