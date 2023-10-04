import React from 'react';
import { Overlay } from './Modal.styled.js';
import { Container, ContactDetails } from 'components';
import { useModal } from 'hooks/useModal.js';

export const Modal = () => {
  const { handleCloseModal } = useModal();

  return (
    <Overlay onClick={handleCloseModal}>
      <Container>
        <button onClick={handleCloseModal}>Close</button>
        <ContactDetails />
      </Container>
    </Overlay>
  );
};
