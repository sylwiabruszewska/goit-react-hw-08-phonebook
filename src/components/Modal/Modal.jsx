import { Overlay, StyledIconClose, BoxForButton } from './Modal.styled.js';
import { Container, ContactDetails, ButtonIcon } from 'components';
import { useModal } from 'hooks/useModal.js';

export const Modal = () => {
  const { handleCloseModal } = useModal();

  return (
    <Overlay onClick={handleCloseModal}>
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
