import styled from 'styled-components';

import { FaTrashAlt } from 'react-icons/fa';

export const StyledIcon = styled(FaTrashAlt)`
  color: gray;
  font-size: 20px;
`;

export const StyledButton = styled.button`
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  transition: background-color 0.3s ease;

  &:hover {
    ${StyledIcon} {
      color: tomato;
    }
  }
`;
