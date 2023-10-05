import { StyledForm, StyledInput, StyledText } from './ContactDetails.styled';
import { Button, InputField } from 'components';
import Notiflix from 'notiflix';

import { useSelector, useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { selectContactDetails } from 'redux/contacts/selectors';

import { closeModal } from 'redux/modal/modalSlice';

Notiflix.Notify.init({
  width: '300px',
  position: 'center-top',
  success: {
    background: '#a06cd5',
  },
  warning: {
    background: '#fb8e5d',
  },
});

export const ContactDetails = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const contactDetails = useSelector(selectContactDetails);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const onSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!isContactExists) {
      dispatch(
        editContact({
          contactId: contactDetails.id,
          contactName: name,
          contactNumber: number,
        })
      );

      Notiflix.Notify.success(`Contact ${name} edited successfully`);
    }

    handleCloseModal();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledText>Edit contact:</StyledText>
      <InputField label={'Name'}>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name"
          defaultValue={contactDetails.name}
          required
        ></StyledInput>
      </InputField>
      <InputField label="Number">
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}[\-.\s]?\(?\d{1,3}\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone
        number must be digits and can contain spaces, dashes, parentheses and
        can start with+"
          placeholder="Number"
          defaultValue={contactDetails.number}
          required
        ></StyledInput>
      </InputField>

      <Button type="submit">Save</Button>
    </StyledForm>
  );
};
