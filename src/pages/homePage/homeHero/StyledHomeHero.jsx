import styled, { keyframes } from "styled-components";
import { theme } from "../../../theme";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledHomeHero = styled.section`
  display: flex;
  padding: 3rem 2rem;
  background-color: #5b424221;
  backdrop-filter: blur(5px);
  color: white;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImage = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

export const SubTitle = styled.h6`
  font-size: 16px;
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out;
  display: inline-block;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out 0.2s backwards;
`;

export const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  animation: ${fadeInDown} 0.6s ease-out 0.3s backwards;
  max-width: 600px;
`;
