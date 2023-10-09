import {
  StyledItem,
  StyledBox,
  StyledIcon,
  StyledBoxItem,
  StyledName,
  StyledNumber,
  StyledIconEdit,
  StyledIconDelete,
} from './Contact.styled';

import { ButtonIcon } from 'components';

import { useDispatch } from 'react-redux';

import { openModal } from 'redux/modal/modalSlice';

import { setContactDetails } from 'redux/contacts/contactsSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const contact = {
    id,
    name,
    number,
  };

  const handleContactEdit = () => {
    const modalData = {
      title: 'Edit contact',
      showConfirmButton: false,
      component: 'ContactDetails',
    };

    dispatch(setContactDetails(contact));
    dispatch(openModal(modalData));
  };

  const handleContactDelete = () => {
    const modalData = {
      title: 'Delete contact',
      content: `Are you sure you want to delete ${contact.name} from your contact list?`,
      showConfirmButton: true,
      confirmButtonText: 'Delete',
      confirmButtonAction: 'handleContactDelete',
    };

    dispatch(setContactDetails(contact));
    dispatch(openModal(modalData));
  };

  return (
    <>
      <StyledItem>
        <StyledBoxItem>
          <StyledIcon />

          <StyledBox>
            <StyledName>{name}</StyledName>
            <StyledNumber href={`tel:${number}`}>+{number}</StyledNumber>
          </StyledBox>
        </StyledBoxItem>
        <div>
          <ButtonIcon type="button" handler={() => handleContactEdit()}>
            <StyledIconEdit />
          </ButtonIcon>
          <ButtonIcon type="button" handler={() => handleContactDelete()}>
            <StyledIconDelete />
          </ButtonIcon>
        </div>
      </StyledItem>
    </>
  );
};
