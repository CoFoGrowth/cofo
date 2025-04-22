import styled, { keyframes, css } from "styled-components";
import { theme } from "../../theme";
import backgroundImage from "/src/assets/images/CoFoAisolutions.webp";

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

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledSolutions = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5rem 2rem;
  color: white;
  position: relative;

  ${(props) =>
    (props.$variant === "automation" || props.$variant === "home") &&
    css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-blend-mode: overlay;
      min-height: 100vh;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1;
      }

      > * {
        position: relative;
        z-index: 2;
        max-width: 1600px;
        width: 100%;
      }
    `}

  /* ${(props) =>
    props.$variant === "home" &&
    css`
      padding: 6rem 2rem;
      background-color: #0c0a12;
    `} */

  @media (max-width: ${theme.media.mobile}) {
    padding: ${(props) =>
      props.$variant === "home" ? "3rem 1rem" : "3rem 1rem"};
    margin-top: ${(props) => (props.$variant === "automation" ? "2rem" : "0")};
  }
`;

export const SolutionsHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  animation: ${fadeInUp} 0.6s ease-out;
  text-align: center;
  margin-bottom: ${(props) => (props.$variant === "home" ? "4rem" : "2rem")};

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.8rem 0;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0;
  text-align: center;
  color: #fff;
  max-width: 800px;
  font-weight: bold;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.8rem;
  }
`;

export const SolutionsGrid = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;

  ${(props) =>
    (props.$variant === "automation" || props.$variant === "home") &&
    css`
      grid-template-columns: repeat(3, 1fr);

      @media (max-width: ${theme.media.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      @media (max-width: ${theme.media.mobile}) {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    `}
`;

export const SolutionCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  animation: ${fadeInLeft} 0.6s ease-out;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.8rem;
    gap: 0.8rem;
  }

  ${(props) => {
    if (props.$variant === "primary") {
      return css`
        background: linear-gradient(
          135deg,
          rgba(138, 43, 226, 0.7),
          rgba(218, 112, 214, 0.7)
        );
      `;
    } else if (props.$variant === "secondary") {
      return css`
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        animation: ${fadeInUp} 0.6s ease-out;
      `;
    } else if (props.$variant === "gradient") {
      return css`
        background: linear-gradient(
          135deg,
          rgba(138, 43, 226, 0.7),
          rgba(218, 112, 214, 0.7)
        );
      `;
    } else if (props.$variant === "dark") {
      return css`
        background-color: #101520;
      `;
    }
  }}
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  color: #fff;
  font-weight: bold;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.5rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: ${theme.media.mobile}) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export const CardButton = styled.a`
  display: inline-block;
  background-image: linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%);
  box-shadow: -25px 0px 20px -10px #ff7fc2 inset;
  color: white;
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;
  border: none;
  border-radius: 30px;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-image 0.3s ease;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    transform: translateY(-3px);
    background-image: linear-gradient(120deg, #b47cfd 0%, #ff7fc2 100%);
    box-shadow: 0px 5px 30px 0px rgba(255, 255, 255, 0.3);
    color: white;
    transition: all 0.2s ease;
  }

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }
`;

export const CardImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: auto;
  border-radius: 0 0 15px 0;
  opacity: 0.5;
  z-index: 0;

  @media (max-width: ${theme.media.mobile}) {
    width: 35%;
    opacity: 0.3;
  }
`;

export const StatsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: ${fadeInDown} 0.6s ease-out;

  ${(props) =>
    props.$variant === "time" &&
    css`
      background-color: #101520;
    `}

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.8rem;
    gap: 0.8rem;
  }
`;

export const StatsValue = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: #fff;
  text-align: center;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 2.5rem;
  }
`;

export const StatsTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1rem;
  }
`;

export const StatsDescription = styled.div`
  font-size: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: ${theme.media.mobile}) {
    font-size: 0.9rem;
  }
`;

export const WebinarCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.8rem;
    gap: 0.8rem;
  }
`;

export const WebinarTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  color: #fff;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.5rem;
  }
`;

export const WebinarDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: ${theme.media.mobile}) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export const WebinarButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #fff;
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;
  border: 2px solid #fff;
  border-radius: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }
`;

export const ConsultationCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.8rem;
    gap: 0.8rem;
  }
`;

export const ConsultationTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  color: #fff;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.5rem;
  }
`;

export const ConsultationText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: ${theme.media.mobile}) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export const ConsultationButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #fff;
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.9rem;
  border: 2px solid #fff;
  border-radius: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }
`;

export const SocialMediaCard = styled.div`
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  animation: ${fadeInLeft} 0.8s ease-out;
  height: 300px;

  @media (max-width: ${theme.media.tablet}) {
    flex-direction: column;
    height: auto;
  }
`;

export const SocialMediaInfo = styled.div`
  flex: 1;
  background: linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SocialMediaVideo = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${theme.media.tablet}) {
    min-height: 250px;
  }
`;

export const AuditCard = styled.div`
  background: linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%);
  border-radius: 15px;
  padding: 3rem;
  animation: ${fadeIn} 0.8s ease-out;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${theme.media.tablet}) {
    padding: 2rem;
  }
`;

export const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    width: 30px;
    height: 30px;
    fill: #b47cfd;
  }
`;

export const IconBox = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: ${theme.media.tablet}) {
    text-align: left;
  }
`;

export const IconTitle = styled.h4`
  font-size: 3rem;
  margin: 0 0 0.5rem;
  font-weight: bold;
  background: linear-gradient(120deg, #ff7fc2, #b47cfd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const IconText = styled.div`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
`;
