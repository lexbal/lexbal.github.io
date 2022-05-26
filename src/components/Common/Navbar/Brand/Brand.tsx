import React, { FC } from 'react';
import './Brand.scss';
import Item from '../Group/Item/Item';

interface BrandProps {
  children: React.ReactNode
}

const Brand: FC<BrandProps> = ({ children }) => (
  <Item href="/">
    <span className="Brand" data-testid="Brand">
      {children}
    </span>
  </Item>
);

export default Brand;
