import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: gray;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  &.active,
  &:hover {
    color: #fb8e5d;
  }
`;

export const StyledLogo = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: gray;
  margin-right: 20px;
  text-transform: lowercase;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;
