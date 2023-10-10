import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  StyledHome,
  StyledTextWrapper,
  StyledPageHeading,
  StyledHighlightedText,
  StyledEmphasizedText,
  StyledList,
  StyledListItem,
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
        <StyledImg src={photo} />
        <StyledTextWrapper>
          <StyledPageHeading>
            Welcome to{' '}
            <StyledHighlightedText>Phonebook App</StyledHighlightedText>
          </StyledPageHeading>
          <StyledEmphasizedText>
            Managing your contacts has never been easier.
          </StyledEmphasizedText>

          <StyledList>
            <StyledListItem>
              <StyledIcon>
                <FaBook />
              </StyledIcon>
              <StyledHeading>Keep your contacts close</StyledHeading>
              <p>
                No more worries about losing important phone numbers. Stay
                connected with ease.
              </p>
            </StyledListItem>

            <StyledListItem>
              <StyledIcon>
                <BsStars />
              </StyledIcon>
              <StyledHeading>Simplified Contact Management</StyledHeading>
              <p>
                Our user-friendly interface makes it simple to add and manage
                your contacts with just a few clicks.
              </p>
            </StyledListItem>

            <StyledListItem>
              <StyledIcon>
                <FaCloud />
              </StyledIcon>
              <StyledHeading>Access Your Contacts Anywhere</StyledHeading>
              <p>
                Create your account and securely store all your contacts in one
                place.
              </p>
            </StyledListItem>
          </StyledList>

          <Link to="/register">
            <Button type="button">Get Started Now</Button>
          </Link>
          <StyledParagraph>
            Already a member? <StyledLink to="/login">Sign in</StyledLink>
          </StyledParagraph>
        </StyledTextWrapper>
      </StyledHome>
    </>
  );
};

export default Home;
