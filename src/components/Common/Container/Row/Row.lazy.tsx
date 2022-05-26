import React, { lazy, Suspense } from 'react';

const LazyRow = lazy(() => import('./Row'));

const Row = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRow {...props}>
      Loading...
    </LazyRow>
  </Suspense>
);

export default Row;
