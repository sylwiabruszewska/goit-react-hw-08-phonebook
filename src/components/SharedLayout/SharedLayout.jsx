import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader, Navigation } from 'components';
import { Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
