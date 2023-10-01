import { StyledForm } from './LoginForm.styled';

import { Button, Input, InputField } from 'components';

export const LoginForm = () => {
  return (
    <div>
      <StyledForm>
        <InputField label="Email">
          <Input type="email" name="email" placeholder="Email" required />
        </InputField>
        <InputField label="Password">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </InputField>
        <Button type="submit">Sign in</Button>
      </StyledForm>
    </div>
  );
};
