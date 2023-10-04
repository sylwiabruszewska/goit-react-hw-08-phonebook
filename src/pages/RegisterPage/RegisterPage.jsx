import { AuthForm } from 'components';

import { Helmet } from 'react-helmet';

import styled from 'styled-components';
import photo from 'images/auth.png';
import { Container, Content } from 'components';

const StyledImg = styled.img`
  width: auto;
  height: 200px;
  object-fit: contain;

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1200px) {
    height: 500px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;

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
