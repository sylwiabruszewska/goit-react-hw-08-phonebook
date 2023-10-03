import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiSolidLockAlt } from 'react-icons/bi';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledFormTitle = styled.h3`
  font-size: 1.2rem;

  color: #a06cd5;
  font-weight: 500;
`;

export const StyledIcon = styled(BiSolidLockAlt)`
  font-size: 2rem;
  color: #a06cd5;
`;

export const StyledLink = styled(Link)`
  font-weight: 500;

  &:hover {
    color: #a06cd5;
  }
`;
