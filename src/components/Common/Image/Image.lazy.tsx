import React, { lazy, Suspense } from 'react';

const LazyImage = lazy(() => import('./Image'));

const Image = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyImage src="#" {...props} />
  </Suspense>
);

export default Image;
