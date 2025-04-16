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
  background: linear-gradient(45deg, #8a2be2, #da70d6);
  border: none;
  border-radius: 8px;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-weight: bold;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;
