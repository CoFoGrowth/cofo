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
  background-color: #5b424221;
  backdrop-filter: blur(5px);
  color: white;
  gap: 4rem;

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
  text-align: center;
  font-size: 16px;
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out;
  border: 1px solid #ff7fc2;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 30px;
  max-width: 300px;
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
  background-image: linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%);
  box-shadow: -25px 0px 20px -10px #ff7fc2 inset;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-image 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    background-image: linear-gradient(120deg, #b47cfd 0%, #ff7fc2 100%);
    box-shadow: 0px 5px 30px 0px rgba(255, 255, 255, 0.3);
    color: white;
    transition: all 0.2s ease;
  }

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`;
