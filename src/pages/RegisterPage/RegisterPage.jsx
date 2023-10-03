import { AuthForm } from 'components';

import { Helmet } from 'react-helmet';

import styled from 'styled-components';
import photo from 'images/auth.png';
import { Container, Content } from 'components';

const StyledImg = styled.img`
  width: auto;
  height: 500px;
  object-fit: contain;
`;

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App - Register</title>
      </Helmet>

      <Content>
        <Container>
          <AuthForm />
        </Container>
        <StyledImg src={photo} />
      </Content>
    </>
  );
};

export default RegisterPage;
