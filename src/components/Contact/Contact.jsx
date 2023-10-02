import {
  StyledItem,
  StyledBox,
  StyledIcon,
  StyledBoxItem,
  StyledName,
  StyledNumber,
} from './Contact.styled';

import { ButtonDelete } from 'components';
import Notiflix from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleDelete = () => {
    const contactToDelete = contacts.find(contact => contact.id === id);

    if (contactToDelete) {
      dispatch(deleteContact(id));
      Notiflix.Notify.success(`${contactToDelete.name} has been removed`);
    }
  };

  return (
    <StyledItem>
      <StyledBoxItem>
        <StyledIcon />

        <StyledBox>
          <StyledName>{name}</StyledName>
          <StyledNumber href={`tel:${number}`}>+{number}</StyledNumber>
        </StyledBox>
      </StyledBoxItem>
      <ButtonDelete type="button" handler={() => handleDelete(id)}>
        <StyledIcon />
      </ButtonDelete>
    </StyledItem>
  );
};
