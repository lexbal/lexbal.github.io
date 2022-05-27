import React, { lazy, Suspense } from 'react';

const LazyForm = lazy(() => import('./Form'));

const Form = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyForm handleSubmit={() => {}} {...props}>Loading</LazyForm>
  </Suspense>
);

export default Form;
