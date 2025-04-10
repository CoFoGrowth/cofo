import styled from "styled-components";
import { theme } from "../../theme";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 60px;
  object-fit: contain;
`;

export const Button = styled.button`
  background-color: purple;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
