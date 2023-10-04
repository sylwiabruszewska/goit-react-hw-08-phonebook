import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const StyledSpan = styled.span`
  color: gray;
`;

export const StyledBoldSpan = styled.span`
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  color: #fff;
  border-radius: 4px;
  display: inline-block;
  background-color: #fb8e5d;
  padding: 5px;
  margin-right: 0.5rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;
