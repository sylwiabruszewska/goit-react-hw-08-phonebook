import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import photo from 'images/404.png';
import { Content, Button } from 'components';
import {
  StyledImg,
  StyledHeading,
  StyledText,
  StyledWrapper,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App - Page not found</title>
      </Helmet>

      <Content>
        <StyledWrapper>
          <div>
            <StyledHeading>404 - Whoops! Page not found.</StyledHeading>
            <StyledText>
              Sorry, the page you are looking for does not exist.
            </StyledText>

            <Link to="/">
              <Button type="button">Go Home</Button>
            </Link>
          </div>
          <StyledImg
            src={photo}
            alt=""
            role="presentation"
            aria-hidden="true"
          />
        </StyledWrapper>
      </Content>
    </>
  );
};

export default NotFound;
