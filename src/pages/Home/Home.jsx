import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  StyledHome,
  StyledTextWrapper,
  PageHeading,
  HighlightedText,
  EmphasizedText,
  StyledList,
  ListItem,
  StyledIcon,
  StyledParagraph,
  StyledLink,
  StyledImg,
  StyledHeading,
} from './Home.styled';
import { Button } from 'components';
import { BsStars } from 'react-icons/bs';
import { FaCloud } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import photo from 'images/homepage.png';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App</title>
      </Helmet>
      <StyledHome>
        <StyledTextWrapper>
          <PageHeading>
            Welcome to <HighlightedText>Phonebook App</HighlightedText>
          </PageHeading>
          <EmphasizedText>
            Managing your contacts has never been easier.
          </EmphasizedText>

          <StyledList>
            <ListItem>
              <StyledIcon>
                <FaBook />
              </StyledIcon>
              <StyledHeading>Keep your contacts close</StyledHeading>
              <p>
                No more worries about losing important phone numbers. Stay
                connected with ease.
              </p>
            </ListItem>

            <ListItem>
              <StyledIcon>
                <BsStars />
              </StyledIcon>
              <StyledHeading>Simplified Contact Management</StyledHeading>
              <p>
                Our user-friendly interface makes it simple to add and manage
                your contacts with just a few clicks.
              </p>
            </ListItem>

            <ListItem>
              <StyledIcon>
                <FaCloud />
              </StyledIcon>
              <StyledHeading>Access Your Contacts Anywhere</StyledHeading>
              <p>
                Create your account and securely store all your contacts in one
                place.
              </p>
            </ListItem>
          </StyledList>

          <Link to="/register">
            <Button type="button">Get Started Now</Button>
          </Link>
          <StyledParagraph>
            Already a member? <StyledLink to="/login">Sign in</StyledLink>
          </StyledParagraph>
        </StyledTextWrapper>
        <StyledImg src={photo} />
      </StyledHome>
    </>
  );
};

export default Home;
