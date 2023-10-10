import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledImg = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 400px;
  }

  @media (min-width: 1200px) {
    width: 500px;
  }
`;

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    justify-content: center;
    height: 90vh;
  }
`;

export const StyledTextWrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 20px 20px;
  }

  @media (min-width: 1200px) {
    padding: 20px 40px;
    height: 90vh;
  }
`;

export const StyledPageHeading = styled.h1`
  margin: 2rem 0;
  font-size: 3rem;
  text-align: center;
`;

export const StyledEmphasizedText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 1200px) {
    margin-bottom: 3rem;
  }
`;

export const StyledListItem = styled.li`
  margin-bottom: 1.2rem;
  text-align: center;
  padding: 0.6rem;

  @media (min-width: 1200px) {
    padding: 2rem;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  color: #513072;

  &:hover {
    color: #a06cd5;
  }
`;

export const StyledParagraph = styled.p`
  margin: 1.2rem 0;
`;

export const StyledList = styled.ul`
  @media (min-width: 768px) {
    padding: 10px 20px;
  }

  @media (min-width: 1200px) {
    display: flex;
    gap: 20px;
  }
`;

export const StyledIcon = styled.p`
  font-size: 2em;
  text-align: center;
  color: #a06cd5;
`;

export const StyledHighlightedText = styled.span`
  color: #fb8e5d;
`;

export const StyledHeading = styled.h3`
  margin-bottom: 1rem;
`;
