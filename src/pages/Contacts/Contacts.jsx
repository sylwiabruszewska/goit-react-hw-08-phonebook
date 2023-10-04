import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
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
  ButtonUp,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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

      {showButton && <ButtonUp onClick={scrollToTop} />}
    </>
  );
};

export default Contacts;
