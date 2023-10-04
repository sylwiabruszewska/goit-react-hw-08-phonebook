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
import Notiflix from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { openModal } from 'redux/modal/modalSlice';

import { setContactDetails } from 'redux/contacts/contactsSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleContactClick = () => {
    const contact = {
      id,
      name,
      number,
    };

    dispatch(setContactDetails(contact));
    dispatch(openModal());
  };

  const handleDelete = () => {
    const contactToDelete = contacts.find(contact => contact.id === id);

    if (contactToDelete) {
      dispatch(deleteContact(id));
      Notiflix.Notify.success(`${contactToDelete.name} has been removed`);
    }
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
          <ButtonIcon type="button" handler={() => handleContactClick()}>
            <StyledIconEdit />
          </ButtonIcon>
          <ButtonIcon type="button" handler={() => handleDelete(id)}>
            <StyledIconDelete />
          </ButtonIcon>
        </div>
      </StyledItem>
    </>
  );
};
