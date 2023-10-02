import { StyledForm } from './LoginForm.styled';

import { Button, Input, InputField } from 'components';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
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
        <Button type="submit">Let's Get Contacted!</Button>
      </StyledForm>
    </div>
  );
};
