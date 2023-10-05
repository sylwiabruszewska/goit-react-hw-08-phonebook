import { Overlay, StyledIconClose, BoxForButton } from './Modal.styled.js';
import { Container, ContactDetails, ButtonIcon } from 'components';
import { useModal } from 'hooks/useModal.js';
import { useSelector } from 'react-redux';

import { selectModalOpen } from 'redux/modal/selectors.js';

export const Modal = () => {
  const { handleCloseModal } = useModal();

  const ismodalopen = useSelector(selectModalOpen);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  const handleCloseButton = () => {
    console.log(ismodalopen);
    handleCloseModal();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Container>
        <BoxForButton>
          <ButtonIcon type="button" handler={handleCloseButton}>
            <StyledIconClose />
          </ButtonIcon>
        </BoxForButton>

        <ContactDetails />
      </Container>
    </Overlay>
  );
};
