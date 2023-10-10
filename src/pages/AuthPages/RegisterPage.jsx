import { Helmet } from 'react-helmet';

import { StyledWrapper, StyledImg } from './AuthPages.styled';
import photo from 'images/auth.png';
import { AuthForm, Container, Content } from 'components';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App - Register</title>
      </Helmet>

      <Content>
        <StyledWrapper>
          <Container>
            <AuthForm />
          </Container>
          <StyledImg src={photo} />
        </StyledWrapper>
      </Content>
    </>
  );
};

export default RegisterPage;
