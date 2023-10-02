import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Loader, Error } from 'components';

import { selectIsLoading, selectError } from 'redux/contacts/selectors';

import { Helmet } from 'react-helmet';

import { Container } from 'components';

import {
  Section,
  ContactForm,
  ContactList,
  FilterInput,
  InputField,
} from 'components/index';

import { fetchContacts } from 'redux/contacts/operations';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook App - Your contact list</title>
      </Helmet>
      <Container>
        <h1>Your Contacts:</h1>
        <p>Add a new contact here:</p>
        <ContactForm />
        <Section title="Contacts">
          <InputField label="Search contacts...">
            <FilterInput />
          </InputField>

          {isLoading ? <Loader /> : error ? <Error /> : <ContactList />}
        </Section>
      </Container>
    </>
  );
};

export default App;
