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

  nav {
    display: flex;
    align-items: center;

    @media (max-width: ${theme.media.mobile}) {
      display: none;
    }
  }

  @media (max-width: ${theme.media.mobile}) {
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const Logo = styled.img`
  height: 60px;
  object-fit: contain;
`;

export const Button = styled.button`
  background-image: linear-gradient(120deg, #ff7fc2 20%, #b47cfd 60%);
  box-shadow: -25px 0px 20px -10px #ff7fc2 inset;
  border: none;
  border-radius: 30px;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-image 0.3s ease;
  font-weight: bold;

  &:hover {
    transform: translateY(-3px);
    background-image: linear-gradient(120deg, #b47cfd 0%, #ff7fc2 100%);
    box-shadow: 0px 5px 30px 0px rgba(255, 255, 255, 0.3);
    transition: all 0.2s ease;
  }

  @media (max-width: ${theme.media.mobile}) {
    display: none;
  }
`;
