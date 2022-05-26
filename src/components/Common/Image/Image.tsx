import React, { FC } from 'react';
import './Image.scss';

interface ImageProps {
  src: string
}

const Image: FC<ImageProps> = ({ src }) => (
  <img className="Image" data-testid="Image" src={src} />
);

export default Image;
