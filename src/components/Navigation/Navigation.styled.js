import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: white;
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding: 6px;

  &.active {
    border: 2px solid #8dc6ff;
    border-radius: 10px;
    color: #8dc6ff;
  }

  &:hover {
    color: #8dc6ff;
  }
`;

export const StyledLogo = styled(Link)`
  font-size: 36px;
  text-decoration: none;
  color: black;
  margin-right: 20px;
  font-weight: bold;
  text-transform: uppercase;

  background-image: linear-gradient(45deg, #8dc6ff, #0092ca);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
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
  gap: 20px;
`;
