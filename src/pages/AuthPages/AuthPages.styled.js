import styled from 'styled-components';

export const StyledImg = styled.img`
  width: auto;
  height: 200px;
  object-fit: contain;

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1200px) {
    height: 500px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;
