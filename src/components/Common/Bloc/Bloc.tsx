import React, { FC } from 'react';
import './Bloc.scss';

interface BlocProps {
  size: string,
  children: React.ReactNode
}

const Bloc: FC<BlocProps> = ({ size, children }) => (
  <div className={"Bloc " + size} data-testid="Bloc">
    {children}
  </div>
);

export default Bloc;
