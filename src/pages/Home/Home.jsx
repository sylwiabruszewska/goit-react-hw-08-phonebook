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
              <h3>Keep your contacts close</h3>
              <p>
                Phonebook App allows you to safely store and manage all your
                contacts in one place. No more worries about losing important
                phone numbers. Stay connected with ease.
              </p>
            </ListItem>

            <ListItem>
              <StyledIcon>
                <BsStars />
              </StyledIcon>
              <h3>Simplified Contact Management</h3>
              <p>
                Our user-friendly interface makes it simple to add and manage
                your contacts. You can quickly add new contacts and remove
                outdated ones with just a few clicks. Simplify your life by
                keeping your contacts organized and up to date.
              </p>
            </ListItem>

            <ListItem>
              <StyledIcon>
                <FaCloud />
              </StyledIcon>
              <h3>Access Your Contacts Anywhere</h3>
              <p>
                Create your account and securely store all your contacts in one
                place. Your data is safely stored in your account, ensuring that
                you're always in touch, no matter where you are.
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
