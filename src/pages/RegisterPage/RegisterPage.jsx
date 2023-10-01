import { RegisterForm } from 'components';

import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook App - Register</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
