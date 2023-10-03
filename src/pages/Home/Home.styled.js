import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledImg = styled.img`
  height: auto;
  width: 500px;
  object-fit: cover;
`;

export const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const StyledTextWrapper = styled.div`
  padding: 20px 40px;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PageHeading = styled.h1`
  margin: 2rem 0;
  font-size: 3rem;
`;

export const EmphasizedText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 3rem;
`;

export const ListItem = styled.li`
  margin-bottom: 1.2rem;
  text-align: center;
  padding: 2rem;
`;

export const StyledLink = styled(Link)`
  font-weight: 500;

  &:hover {
    color: #a06cd5;
  }
`;

export const StyledParagraph = styled.p`
  margin: 1.2rem 0;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StyledIcon = styled.p`
  font-size: 2rem;
  text-align: center;
  color: #a06cd5;
`;

export const HighlightedText = styled.span`
  color: #fb8e5d;
`;
