import React, { FC } from 'react';
import './Group.scss';

interface GroupProps {
  children: React.ReactNode
}

const Group: FC<GroupProps> = ({ children }) => (
  <div className="Form-Group" data-testid="Group">
    {children}
  </div>
);

export default Group;
