import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";
import { Canvas } from "@react-three/fiber";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

export const ParticleBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(12, 10, 18, 0.5);
    backdrop-filter: blur(1px);
  }

  @media (max-width: ${theme.media.mobile}) {
    display: none;
  }
`;

export const GalaxyCanvas = styled(Canvas)`
  width: 100% !important;
  height: 100% !important;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => (props.$variant === "home" ? "1200px" : "1600px")};
  margin: 0 auto;
  display: flex;
  position: relative;
  z-index: 5;
  @media (max-width: ${theme.media.tablet}) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const StyledHero = styled.section`
  display: flex;
  width: 100%;
  padding: ${(props) => (props.$variant === "home" ? "0px" : "4rem 2rem")};
  gap: ${(props) => (props.$variant === "home" ? "4rem" : "4rem")};
  align-items: start;
  justify-content: center;
  margin-bottom: 4rem;
  position: relative;
  color: white;
  min-height: ${(props) => (props.$variant === "home" ? "800px" : "auto")};
  background-color: ${(props) =>
    props.$variant === "home" ? "transparent" : "inherit"};

  &.container {
    max-width: ${(props) => (props.$variant === "home" ? "100%" : "1600px")};
  }

  @media (max-width: ${theme.media.tablet}) {
    padding: ${(props) =>
      props.$variant === "home" ? "3rem 2rem 200px 2rem" : "3rem 1.5rem"};
    gap: ${(props) => (props.$variant === "home" ? "3rem" : "3rem")};
    margin-bottom: 3rem;
  }

  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
    padding: ${(props) =>
      props.$variant === "home" ? "100px 1.5rem 2rem" : "2rem 1rem"};
    margin-bottom: 2rem;
    gap: ${(props) => (props.$variant === "home" ? "2rem" : "3rem")};
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: ${(props) =>
    props.$variant === "home" ? "center" : "flex-start"};
  max-width: ${(props) => (props.$variant === "content" ? "800px" : "none")};
  animation: ${fadeIn} 0.8s ease-out;
  padding: ${(props) => (props.$variant === "home" ? "1rem" : "0")};

  @media (max-width: ${theme.media.tablet}) {
    order: 1;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: ${(props) => (props.$variant === "home" ? "0.5rem" : "0")};
  }
`;

export const ProfileImage = styled.img`
  max-width: ${(props) => (props.$variant === "content" ? "450px" : "500px")};
  width: 100%;
  height: ${(props) => (props.$variant === "content" ? "450px" : "auto")};
  border-radius: ${(props) => (props.$variant === "content" ? "70%" : "10px")};
  box-shadow: ${(props) =>
    props.$variant === "content"
      ? "0 10px 30px rgba(156, 20, 20, 0.2)"
      : "none"};

  @media (max-width: ${theme.media.tablet}) {
    max-height: ${(props) => (props.$variant === "home" ? "unset" : "350px")};
    width: ${(props) => (props.$variant === "home" ? "100%" : "350px")};
  }

  @media (max-width: ${theme.media.mobile}) {
    max-width: 100%;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$variant === "home" ? "3rem" : "1.5rem")};
  animation: ${fadeInUp} 0.8s ease-out;
  justify-content: center;
  padding: ${(props) => (props.$variant === "home" ? "3.5rem" : "2rem")};
  max-width: ${(props) => (props.$variant === "home" ? "800px" : "none")};

  @media (max-width: ${theme.media.tablet}) {
    order: 2;
    text-align: ${(props) => (props.$variant === "home" ? "center" : "left")};
    padding: ${(props) => (props.$variant === "home" ? "2rem" : "0")};
    gap: ${(props) => (props.$variant === "home" ? "2rem" : "1.5rem")};
  }

  @media (max-width: ${theme.media.mobile}) {
    padding: ${(props) => (props.$variant === "home" ? "1rem 0" : "0")};
    gap: ${(props) => (props.$variant === "home" ? "1.5rem" : "1rem")};
  }
`;

export const SubTitle = styled.h6`
  font-size: 16px;
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out;

  /* Style różne dla wariantów */
  text-align: ${(props) => (props.$variant === "content" ? "center" : "left")};
  color: ${(props) => (props.$variant === "home" ? "#b47cfd" : "white")};
  border: ${(props) =>
    props.$variant === "content" ? "1px solid #ff7fc2" : "none"};
  padding: ${(props) => (props.$variant === "content" ? "5px 10px" : "0")};
  display: ${(props) =>
    props.$variant === "content" ? "inline-block" : "block"};
  border-radius: ${(props) => (props.$variant === "content" ? "30px" : "0")};
  max-width: ${(props) => (props.$variant === "content" ? "300px" : "none")};
  font-weight: ${(props) => (props.$variant === "home" ? "600" : "normal")};
  font-size: ${(props) => (props.$variant === "home" ? "1.25rem" : "16px")};

  @media (max-width: ${theme.media.mobile}) {
    font-size: ${(props) => (props.$variant === "home" ? "1rem" : "16px")};
  }
`;

export const Title = styled.h1`
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out 0.2s backwards;

  /* Style różne dla wariantów */
  font-size: ${(props) => (props.$variant === "home" ? "3.5rem" : "3rem")};
  font-weight: ${(props) => (props.$variant === "home" ? "800" : "normal")};
  line-height: ${(props) => (props.$variant === "home" ? "1.2" : "normal")};

  @media (max-width: ${theme.media.tablet}) {
    font-size: ${(props) => (props.$variant === "home" ? "2.5rem" : "2.5rem")};
  }

  @media (max-width: ${theme.media.mobile}) {
    font-size: ${(props) => (props.$variant === "home" ? "2rem" : "2rem")};
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  color: ${(props) =>
    props.$variant === "home" ? "rgba(255, 255, 255, 0.8)" : "white"};

  @media (max-width: ${theme.media.tablet}) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

export const SocialLinks = styled.div`
  font-size: 1.5rem;

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

  @media (max-width: ${theme.media.mobile}) {
    margin-top: 1rem;
    gap: 0.75rem;
  }
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
