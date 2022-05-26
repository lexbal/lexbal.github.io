import React, { lazy, Suspense } from 'react';

const LazyPage = lazy(() => import('./Footer'));

const Footer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPage {...props} />
  </Suspense>
);

export default Footer;
