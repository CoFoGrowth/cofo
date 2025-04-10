import styled from "styled-components";
import { theme } from "../../theme";

export const StyledFooter = styled.footer`
  background-color: ${theme.colors.primary};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const Copyright = styled.div`
  font-size: 0.9rem;
`;

export const Links = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;
