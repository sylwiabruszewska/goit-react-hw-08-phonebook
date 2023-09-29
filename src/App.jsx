import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import Notiflix from 'notiflix';
import { Loader, Error } from 'components';

import { selectIsLoading, selectError } from 'redux/selectors';

import {
  Container,
  Section,
  ContactForm,
  ContactList,
  FilterInput,
  InputField,
} from './components/index';

import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <Section title="Contacts">
        <InputField label="Find contacts by name">
          <FilterInput />
        </InputField>

        {/* {isLoading && Notiflix.Loading.hourglass()} */}
        {isLoading && <Loader />}

        {error && <Error />}

        <ContactList />
      </Section>
    </Container>
  );
};
