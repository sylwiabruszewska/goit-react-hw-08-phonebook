import { StyledForm } from './RegisterForm.styled';

import { Button, Input, InputField } from 'components';

export const RegisterForm = () => {
  return (
    <div>
      <StyledForm>
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
          />
        </InputField>
        <Button type="submit">Sign up</Button>
      </StyledForm>
    </div>
  );
};
