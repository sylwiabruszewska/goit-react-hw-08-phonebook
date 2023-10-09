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

////////////////////
export const ErrorMessage = styled.div`
  color: tomato;
  margin: 10px 0;
  display: none;
`;
