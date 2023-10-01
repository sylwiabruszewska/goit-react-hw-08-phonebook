import { LoginForm } from 'components';

import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook App - Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
