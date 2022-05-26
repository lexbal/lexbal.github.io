import React, { lazy, Suspense } from 'react';

const LazyBrand = lazy(() => import('./Brand'));

const Brand = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBrand {...props}>Loading</LazyBrand>
  </Suspense>
);

export default Brand;
