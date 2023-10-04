import { Overlay, StyledIconClose, BoxForButton } from './Modal.styled.js';
import { Container, ContactDetails, ButtonIcon } from 'components';
import { useModal } from 'hooks/useModal.js';

export const Modal = () => {
  const { handleCloseModal } = useModal();

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Container>
        <BoxForButton>
          <ButtonIcon onClick={handleCloseModal}>
            <StyledIconClose />
          </ButtonIcon>
        </BoxForButton>

        <ContactDetails />
      </Container>
    </Overlay>
  );
};
