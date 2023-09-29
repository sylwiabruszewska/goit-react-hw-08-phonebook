import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader, Container } from 'components';

import { Navigation } from '../index';

import { Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};
