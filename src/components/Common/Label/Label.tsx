import React, { FC } from 'react';
import './Label.scss';

interface LabelProps {
  children: React.ReactNode
}

const Label: FC<LabelProps> = ({ children }) => (
  <label className="Label" data-testid="Label">
    {children}
  </label>
);

export default Label;
