import styled from "styled-components";
import { theme } from "../../theme";

export const StyledFooter = styled.footer`
  background-color: ${theme.colors.primary};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.8rem 1rem;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const Copyright = styled.div`
  font-size: 0.9rem;
`;

export const Links = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;
