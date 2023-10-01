import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Loader, Error } from 'components';

import { selectIsLoading, selectError } from 'redux/contacts/selectors';

import { Helmet } from 'react-helmet';

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
      <h1>Your Contacts:</h1>
      <p>Add a new contact here:</p>
      <ContactForm />
      <Section title="Contacts">
        <InputField label="Find contacts by name">
          <FilterInput />
        </InputField>

        {isLoading ? <Loader /> : error ? <Error /> : <ContactList />}
      </Section>
    </>
  );
};

export default App;
