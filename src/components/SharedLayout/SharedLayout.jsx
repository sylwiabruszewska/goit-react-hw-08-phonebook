import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader, Navigation, Modal } from 'components';
import { Header } from './SharedLayout.styled';
import { useSelector } from 'react-redux';
import { selectModalOpen } from 'redux/modal/selectors';

export const SharedLayout = () => {
  const modalOpen = useSelector(selectModalOpen);

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {modalOpen && <Modal />}
    </>
  );
};
