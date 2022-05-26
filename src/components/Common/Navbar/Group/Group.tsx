import React, { FC } from 'react';
import './Group.scss';

interface GroupProps {
  direction: string,
  children: React.ReactNode
}

const Group: FC<GroupProps> = ({ children, direction }) => (
  <ul className={"Navbar-Group " + direction} data-testid="Group">
    {children}
  </ul>
);

export default Group;
