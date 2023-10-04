import styled from 'styled-components';
import { LuUserPlus2 } from 'react-icons/lu';

export const StyledForm = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const IconAddContact = styled(LuUserPlus2)`
  font-size: 1.5rem;
`;

export const StyledText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

////////////////////
export const ErrorMessage = styled.div`
  color: tomato;
  margin: 10px 0;
  display: none;
`;

export const StyledInput = styled.input`
  display: block;
  padding: 5px 10px;
  outline: 1px solid #dddddd;
  border: 0;
  margin: 0.6rem 0;
  width: 300px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  color: #666666;
  font-weight: 600;
  transition: background-color 0.3s ease;
  height: 40px;

  &:focus {
    outline: 2px solid #a06cd5;
  }
  &:not(:placeholder-shown):invalid {
    outline: 2px solid tomato;
  }
  &:not(:placeholder-shown):valid {
    outline: 2px solid limegreen;
  }

  &:not(:placeholder-shown):invalid + ${ErrorMessage} {
    display: inline-block;
    max-width: 300px;
  }
`;
