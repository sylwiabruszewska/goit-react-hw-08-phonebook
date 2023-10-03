import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import {
  Error,
  Container,
  Content,
  ContactForm,
  ContactList,
  FilterInput,
} from 'components';
import { selectError, selectContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import photo from 'images/contacts.png';
import {
  Heading,
  Text,
  StyledBook,
  Divider,
  StyledWrapper,
  StyledBox,
  IconSearch,
  StyledImg,
} from './Contacts.styled';

const App = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook App - Your contact list</title>
      </Helmet>
      <Content>
        <Container>
          <StyledBook>
            <div>
              <Heading>Your Contacts</Heading>

              {contacts.length > 0 ? (
                <>
                  <StyledBox>
                    <IconSearch />
                    <FilterInput />
                  </StyledBox>
                  {error ? <Error /> : <ContactList />}
                </>
              ) : (
                <p>It's so empty here! Add some contacts.</p>
              )}
            </div>
            <Divider />
            <StyledWrapper>
              <StyledImg src={photo} />
              <Text>Add a new contact here:</Text>
              <ContactForm />
            </StyledWrapper>
          </StyledBook>
        </Container>
      </Content>
    </>
  );
};

export default App;
