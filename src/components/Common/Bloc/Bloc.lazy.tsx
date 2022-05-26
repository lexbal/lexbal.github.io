import React, { lazy, Suspense } from 'react';

const LazyBloc = lazy(() => import('./Bloc'));

const Bloc = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBloc size='small' {...props}>Loading</LazyBloc>
  </Suspense>
);

export default Bloc;
