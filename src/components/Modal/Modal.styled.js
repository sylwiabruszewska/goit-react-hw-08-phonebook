import styled from 'styled-components';

import { AiFillCloseCircle } from 'react-icons/ai';

export const StyledIconClose = styled(AiFillCloseCircle)`
  color: gray;
  font-size: 30px;

  &:hover {
    color: #fb8e5d;
    cursor: pointer;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const BoxForButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
