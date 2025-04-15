import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

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

export const StyledHero = styled.section`
  display: flex;
  padding: 4rem 2rem;
  background-color: ${theme.colors.primary};

  color: white;
  gap: 4rem;
  max-width: 1600px;

  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ProfileImage = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SubTitle = styled.h6`
  font-size: 1rem;
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out 0.2s backwards;
`;

export const SocialLinks = styled.div`
  font-size: 1rem;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
  }
`;

export const StyledButton = styled.a`
  flex: 1;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${theme.colors.primary};
  }
`;
