import {
  Overlay,
  StyledIconClose,
  BoxForButton,
  StyledModalTitle,
  ModalBox,
  StyledModalContent,
  ModalContainer,
} from './Modal.styled.js';
import { ContactDetails, ButtonIcon, Button } from 'components';
import { useModal } from 'hooks/useModal.js';
import { useSelector } from 'react-redux';

import { selectModalContent } from 'redux/modal/selectors.js';

/////////
import { useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import Notiflix from 'notiflix';
import { deleteContact } from 'redux/contacts/operations';
import { selectContactDetailsMemoized } from 'redux/contacts/selectors';

////////

export const Modal = () => {
  const { handleCloseModal } = useModal();

  ////////
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactDetails = useSelector(selectContactDetailsMemoized);
  const contactId = contactDetails?.id;
  ////////

  const modalData = useSelector(selectModalContent);

  const handleConfirm = () => {
    switch (modalData.confirmButtonAction) {
      case 'handleContactDelete':
        return handleContactDelete();
      default:
        return null;
    }
  };

  const handleContactDelete = () => {
    const contactToDelete = contacts.find(contact => contact.id === contactId);

    if (contactToDelete) {
      dispatch(deleteContact(contactId));
      handleCloseModal();
      Notiflix.Notify.success(`${contactToDelete.name} has been removed`);
    }
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  const handleCloseButton = () => {
    handleCloseModal();
  };

  const renderComponent = () => {
    switch (modalData.component) {
      case 'ContactDetails':
        return <ContactDetails />;
      default:
        return null;
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <BoxForButton>
          <ButtonIcon type="button" handler={handleCloseButton}>
            <StyledIconClose />
          </ButtonIcon>
        </BoxForButton>

        <ModalBox>
          <StyledModalTitle>{modalData.title}</StyledModalTitle>
          <StyledModalContent>{modalData.content}</StyledModalContent>
          {modalData.component && renderComponent()}
          {modalData.showConfirmButton && (
            <Button type="button" handler={handleConfirm}>
              {modalData.confirmButtonText}
            </Button>
          )}
        </ModalBox>
      </ModalContainer>
    </Overlay>
  );
};
