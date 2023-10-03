import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// change img for 404
import photo from 'images/auth.png';
import { Content, Button } from 'components';
import { StyledImg, StyledHeading, StyledText } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App - Page not found</title>
      </Helmet>

      <Content>
        <div>
          <StyledHeading>404 - Whoops! Page not found.</StyledHeading>
          <StyledText>
            Sorry, the page you are looking for does not exist.
          </StyledText>

          <Link to="/">
            <Button type="button">Go Home</Button>
          </Link>
        </div>

        <StyledImg src={photo} />
      </Content>
    </>
  );
};

export default NotFound;
