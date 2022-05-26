import React, { FC } from 'react';
import './Row.scss';

interface RowProps {
  children: React.ReactNode
}

const Row: FC<RowProps> = ({ children }) => (
  <div className="Row" data-testid="Row">
    {children}
  </div>
);

export default Row;
