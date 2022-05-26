import React, { FC } from 'react';
import './Item.scss';

interface ItemProps {
  href: string,
  children: React.ReactNode
}

const Item: FC<ItemProps> = ({ href, children }) => (
  <li className="Item" data-testid="Item">
    <a href={href}>{children}</a>
  </li>
);

export default Item;
