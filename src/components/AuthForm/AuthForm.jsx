import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register, logIn } from 'redux/auth/operations';
import { useState } from 'react';
import Notiflix from 'notiflix';

import {
  StyledForm,
  StyledFormTitle,
  StyledIcon,
  StyledLink,
  CheckboxLabel,
} from './AuthForm.styled';
import { Button, Input, InputField } from 'components';

import { openModal } from 'redux/modal/modalSlice';

import { terms } from './terms';

export const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    if (location === '/register') {
      if (!isAgreed) {
        Notiflix.Notify.warning(
          'Please agree to the Terms and Privacy Policy.'
        );
        return;
      }

      dispatch(register({ name, email, password }));
    }

    if (location === '/login') {
      dispatch(logIn({ email, password }));
    }

    form.reset();
  };

  const openModalOnClick = () => {
    dispatch(
      openModal({
        title: 'Terms and Privacy Policy',
        content: `${terms}`,
      })
    );
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledIcon />
        <StyledFormTitle>
          {location === '/login' ? 'Sign in' : 'Sign up'}
        </StyledFormTitle>
        {location === '/register' ? (
          <InputField label="Name">
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              title="Name may contain only letters, apostrophe, dash and spaces."
              pattern="^[A-Za-z\s'\-]+$"
              required
              onChange={e => setName(e.target.value)}
            />
          </InputField>
        ) : null}
        <InputField label="Email">
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            title="The email must be a valid email address in the following format: characters@characters.domain."
            required
            autocomplete="username"
            onChange={e => setEmail(e.target.value)}
          />
        </InputField>
        <InputField label="Password">
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            title="The password must be at least 8 characters long."
            pattern=".{8,}"
            required
            autocomplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
        </InputField>

        {location === '/register' ? (
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
            />
            <div>
              Do you accept our
              <StyledLink
                onClick={e => {
                  e.preventDefault();
                  openModalOnClick();
                }}
              >
                Terms and Privacy Policy?
              </StyledLink>
            </div>
          </CheckboxLabel>
        ) : null}

        <Button type="submit">
          {location === '/register'
            ? `Sign Up and Stay Connected!`
            : `Let's Get Contacted!`}
        </Button>
        {location === '/login' ? (
          <p>
            New here? <StyledLink to="/register">Sign up</StyledLink>
          </p>
        ) : (
          <p>
            Are you already in? <StyledLink to="/login">Sign in</StyledLink>
          </p>
        )}
      </StyledForm>
    </div>
  );
};
