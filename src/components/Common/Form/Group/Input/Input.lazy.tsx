import React, { lazy, Suspense } from 'react';

const LazyInput = lazy(() => import('./Input'));

const Input = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInput type="text" name='name' placeholder='placeholder' {...props} />
  </Suspense>
);

export default Input;
