import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import {
  Loader,
  Error,
  Container,
  Content,
  ContactForm,
  ContactList,
  FilterInput,
} from 'components';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
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
      <Content>
        <Container>
          <StyledBook>
            <div>
              <Heading>Your Contacts</Heading>
              <StyledBox>
                <IconSearch />
                <FilterInput />
              </StyledBox>
              {isLoading ? <Loader /> : error ? <Error /> : <ContactList />}
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
