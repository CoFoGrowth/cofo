import styled, { keyframes } from "styled-components";
import { theme } from "../../../theme";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledHomeCta = styled.section`
  padding: 6rem 2rem;
  background-color: #060104;

  @media (max-width: ${theme.media.mobile}) {
    padding: 3rem 1rem;
  }
`;

export const CtaContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const CtaCard = styled.div`
  background: linear-gradient(120deg, #060104 0%, #b47cfd 100%);
  border-radius: 20px;
  padding: 4rem;
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: ${theme.media.mobile}) {
    padding: 2rem;
  }
`;

export const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 1.5rem;
  font-weight: bold;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 2rem;
  }
`;

export const CtaDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0 0 2rem;
  max-width: 800px;
  color: rgba(255, 255, 255, 0.9);
`;

export const CtaButton = styled.a`
  display: inline-block;
  background-color: white;
  color: #b47cfd;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
