import React, { lazy, Suspense } from 'react';

const LazyItem = lazy(() => import('./Item'));

const Item = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyItem href="#" {...props}>Loading</LazyItem>
  </Suspense>
);

export default Item;
