import {
  StyledLink,
  StyledLogo,
  StyledNav,
  StyledBox,
} from './Navigation.styled';

import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const userIsLogged = useSelector(selectIsLoggedIn);

  return (
    <StyledNav>
      <StyledLogo to="/">Phonebook</StyledLogo>

      {userIsLogged ? (
        <UserMenu />
      ) : (
        <StyledBox>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <StyledLink to="/login">Sign in</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </StyledBox>
      )}
    </StyledNav>
  );
};
