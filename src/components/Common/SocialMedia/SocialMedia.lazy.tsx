import React, { lazy, Suspense } from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const LazySocialMedia = lazy(() => import('./SocialMedia'));

const SocialMedia = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySocialMedia href="http://www.test.com" icon={faCoffee} {...props} />
  </Suspense>
);

export default SocialMedia;
