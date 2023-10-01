import { StyledLink, StyledLogo, StyledNav } from './Navigation.styled';

import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const userIsLogged = useSelector(selectIsLoggedIn);

  return (
    <StyledNav>
      <StyledLogo to="/">Phonebook</StyledLogo>
      <StyledLink to="/contacts">Contacts</StyledLink>

      {userIsLogged ? (
        <UserMenu />
      ) : (
        <>
          <StyledLink to="/login">Sign in</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </>
      )}
    </StyledNav>
  );
};
