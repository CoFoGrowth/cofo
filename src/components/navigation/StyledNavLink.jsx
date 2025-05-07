import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

export const StyledNavLink = styled(NavLink)`
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  padding: 5px 0;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }

  &.active {
    font-weight: 700;

    &:after {
      width: 100%;
      background-color: #ff7fc2;
    }
  }

  @media (max-width: 1024px) {
    margin: 1rem 0;
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;

  .mobile-buttons {
    display: none;
  }

  @media (max-width: 1024px) {
    display: none;
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.primary};
    flex-direction: column;
    padding: 1rem;
    z-index: 999;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

    &.open {
      display: flex;
    }

    .mobile-buttons {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 1.5rem;
      gap: 1rem;
    }

    .mobile-logout-button,
    .mobile-cta-button {
      padding: 10px 20px;
      border-radius: 30px;
      border: none;
      font-weight: bold;
      color: white;
      cursor: pointer;
      transition: transform 0.2s ease;
      width: 100%;
    }

    .mobile-logout-button {
      background-image: linear-gradient(120deg, #ff5555 20%, #ff9966 60%);
      box-shadow: -15px 0px 15px -5px #ff5555 inset;
    }

    .mobile-cta-button {
      background-image: linear-gradient(120deg, #ff7fc2 20%, #b47cfd 60%);
      box-shadow: -25px 0px 20px -10px #ff7fc2 inset;
    }

    .mobile-logout-button:hover,
    .mobile-cta-button:hover {
      transform: translateY(-3px);
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 1024px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
