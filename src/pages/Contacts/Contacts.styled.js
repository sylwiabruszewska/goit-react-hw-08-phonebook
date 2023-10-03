import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

export const Heading = styled.h1`
  color: gray;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 500;
  margin: 1rem 0 2.6rem;
`;

export const Text = styled.p`
  color: #a06cd5;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const StyledBook = styled.div`
  display: flex;
  gap: 50px;
`;

export const Divider = styled.div`
  background-color: #f4f4f2;
  width: 2px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledImg = styled.img`
  width: auto;
  height: 200px;
  object-fit: contain;
  border-radius: 50%;
  background-color: #f4f4f2;
  margin-bottom: 1rem;
`;

export const IconSearch = styled(BiSearchAlt)`
  font-size: 1.5rem;
  color: gray;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 1rem;
`;
