import { Helmet } from 'react-helmet';

import { StyledWrapper, StyledImg } from './AuthPages.styled';
import photo from 'images/auth.png';
import { AuthForm, Container, Content } from 'components';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App - Login</title>
      </Helmet>

      <Content>
        <StyledWrapper>
          <Container>
            <AuthForm />
          </Container>
          <StyledImg src={photo} role="presentation" aria-hidden="true" />
        </StyledWrapper>
      </Content>
    </>
  );
};

export default LoginPage;
