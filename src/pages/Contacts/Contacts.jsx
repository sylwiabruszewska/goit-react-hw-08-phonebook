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
  StyledHeading,
  StyledText,
  StyledBook,
  StyledDivider,
  StyledWrapper,
  StyledBox,
  StyledIconSearch,
  StyledImg,
  StyledButtonUp,
  StyledLabel,
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
              <StyledHeading>Your Contacts</StyledHeading>

              {contacts.length > 0 ? (
                <>
                  <StyledBox>
                    <label htmlFor="filter-input">
                      <StyledLabel>Search contacts:</StyledLabel>
                    </label>
                    <StyledIconSearch />{' '}
                    <FilterInput
                      id="filter-input"
                      ariaLabelledby="filter-label"
                    />
                  </StyledBox>
                  {error ? <Error /> : <ContactList />}
                </>
              ) : (
                <p>It's so empty here! Add some contacts.</p>
              )}
            </div>
            <StyledDivider />
            <StyledWrapper>
              <StyledImg
                src={photo}
                alt=""
                role="presentation"
                aria-hidden="true"
              />
              <StyledText>Add a new contact here:</StyledText>
              <ContactForm />
            </StyledWrapper>
          </StyledBook>
        </Container>
      </Content>

      {showButton && <StyledButtonUp onClick={scrollToTop} />}
    </>
  );
};

export default Contacts;
