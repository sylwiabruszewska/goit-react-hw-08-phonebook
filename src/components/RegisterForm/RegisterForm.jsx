import { StyledForm } from './RegisterForm.styled';

import { Button, Input, InputField } from 'components';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <InputField label="Name">
          <Input type="text" name="name" placeholder="Name" required />
        </InputField>
        <InputField label="Email">
          <Input type="email" name="email" placeholder="Email" required />
        </InputField>
        <InputField label="Password">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            autocomplete="current-password"
          />
        </InputField>
        <Button type="submit">Sign Up and Stay Connected!</Button>
      </StyledForm>
    </div>
  );
};
