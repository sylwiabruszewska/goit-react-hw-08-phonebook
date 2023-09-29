import { StyledForm } from './Register.styled';

import { Button, Input, InputField } from 'components';

import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <StyledForm>
        <InputField label="Name">
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name"
            required
          />
        </InputField>
        <InputField label="Email">
          <Input
            type="email"
            name="email"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="TITLEEEEEEEEEEEEE"
            placeholder="Email"
            required
          />
        </InputField>
        <InputField label="Password">
          <Input
            type="password"
            name="password"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="TITLEEEEEEEEEEEEE"
            placeholder="Password"
            required
          />
        </InputField>
        <Button type="submit">Sign up</Button>
      </StyledForm>
    </div>
  );
};

export default Register;
