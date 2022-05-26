import React, { lazy, Suspense } from 'react';

const LazyLabel = lazy(() => import('./Label'));

const Label = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLabel {...props}>Loading</LazyLabel>
  </Suspense>
);

export default Label;
