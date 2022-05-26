import React, { FC } from 'react';
import './Container.scss';

interface ContainerProps {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className="Container" data-testid="Container">
    {children}
  </div>
);

export default Container;
