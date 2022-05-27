import React, { lazy, Suspense } from 'react';

const LazyTextarea = lazy(() => import('./Textarea'));

const Textarea = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTextarea placeholder='placeholder' name='name' {...props} />
  </Suspense>
);

export default Textarea;
