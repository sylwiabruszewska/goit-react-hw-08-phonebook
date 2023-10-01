import styled from 'styled-components';

import { FaUserCircle } from 'react-icons/fa';

export const StyledIcon = styled(FaUserCircle)`
  color: pink;
  font-size: 40px;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  color: #313131;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: pink;

    ${StyledIcon} {
      color: white;
    }
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledBoxItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const StyledName = styled.p`
  font-weight: 500;
  text-transform: capitalize;
`;

export const StyledNumber = styled.a`
  text-decoration: none;
  color: gray;
  display: block;
`;
