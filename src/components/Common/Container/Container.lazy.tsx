import React, { lazy, Suspense } from 'react';

const LazyContainer = lazy(() => import('./Container'));

const Container = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyContainer {...props}>Loading</LazyContainer>
  </Suspense>
);

export default Container;
