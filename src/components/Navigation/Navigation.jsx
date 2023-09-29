import { StyledLink, StyledLogo, StyledNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledLogo to="/">Phonebook</StyledLogo>
      <StyledLink to="/contacts">Contacts</StyledLink>
      <StyledLink to="/login">Sign in</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </StyledNav>
  );
};
