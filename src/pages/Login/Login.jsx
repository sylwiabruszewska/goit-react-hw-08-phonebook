import { StyledForm } from './Login.styled';

import { Button, Input, InputField } from 'components';

const Login = () => {
  return (
    <div>
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
        <Button type="submit">Sign in</Button>
      </StyledForm>
    </div>
  );
};

export default Login;
