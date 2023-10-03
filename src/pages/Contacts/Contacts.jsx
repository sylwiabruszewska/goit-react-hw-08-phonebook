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
import { selectError } from 'redux/contacts/selectors';
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
              <StyledBox>
                <IconSearch />
                <FilterInput />
              </StyledBox>
              {error ? <Error /> : <ContactList />}
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
