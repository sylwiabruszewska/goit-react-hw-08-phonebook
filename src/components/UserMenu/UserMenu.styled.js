import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  justify-content: space-between;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;

export const StyledSpan = styled.span`
  color: gray;
`;

export const StyledBoldSpan = styled.span`
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  text-transform: capitalize;
  font-weight: 500;

  @media (min-width: 768px) {
    color: #fff;
    border-radius: 4px;
    display: inline-block;
    background-color: #fb8e5d;
    padding: 5px;
    margin-right: 0.5rem;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;
