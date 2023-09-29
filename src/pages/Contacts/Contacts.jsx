import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Loader, Error } from 'components';

import { selectIsLoading, selectError } from 'redux/selectors';

import {
  Section,
  ContactForm,
  ContactList,
  FilterInput,
  InputField,
} from 'components/index';

import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Section title="Contacts">
        <InputField label="Find contacts by name">
          <FilterInput />
        </InputField>

        {isLoading && <Loader />}

        {error && <Error />}

        <ContactList />
      </Section>
    </>
  );
};

export default App;
