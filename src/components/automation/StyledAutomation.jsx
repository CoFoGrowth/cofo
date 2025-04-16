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

export const StyledAutomation = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  color: white;
  min-height: 100vh;
  margin-top: 2rem;
  position: relative;

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
  }

  @media (max-width: ${theme.media.mobile}) {
    padding: 1rem 0.5rem;
    margin-top: 1rem;
  }
`;

export const AutomationHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  animation: ${fadeInUp} 0.6s ease-out;

  @media (max-width: ${theme.media.mobile}) {
    padding: 1rem 0;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0;
  text-align: center;
  color: #fff;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.8rem;
  }
`;

export const AutomationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: ${theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${theme.media.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const AutomationCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  animation: ${fadeInLeft} 0.6s ease-out;
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.media.mobile}) {
    padding: 1.5rem;
    gap: 1rem;
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
    }
  }}
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  color: #fff;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.5rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;

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

export const AutomationCardImage = styled.img`
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

  @media (max-width: ${theme.media.mobile}) {
    padding: 1.5rem;
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

export const StatsTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
  text-align: center;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.2rem;
  }
`;

export const StatsDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export const WebinarCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  animation: ${fadeInUp} 0.6s ease-out;
  background-color: transparent;
  background-image: linear-gradient(180deg, #9b00e3 0%, #0a01187a 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${theme.media.mobile}) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

export const WebinarTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  color: #fff;
  text-align: center;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.5rem;
  }
`;

export const WebinarDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  color: #fff;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export const WebinarButton = styled.a`
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

export const ConsultationCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 15px;
  background: linear-gradient(
    135deg,
    rgba(138, 43, 226, 0.7),
    rgba(218, 112, 214, 0.7)
  );

  @media (max-width: ${theme.media.mobile}) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

export const ConsultationTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0;
  color: #fff;
  position: relative;
  padding-left: 2.5rem;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='white' d='M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.5rem;
    padding-left: 2rem;

    &:before {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export const ConsultationText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export const ConsultationButton = styled.a`
  display: inline-block;
  background-image: linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%);
  box-shadow: -25px 0px 20px -10px #ff7fc2 inset;
  color: white;
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-image 0.3s ease;
  cursor: pointer;
  align-self: center;

  &:hover {
    transform: translateY(-3px);
    background-image: linear-gradient(120deg, #b47cfd 0%, #ff7fc2 100%);
    box-shadow: 0px 5px 30px 0px rgba(255, 255, 255, 0.3);
    color: white;
    transition: all 0.2s ease;
  }

  @media (max-width: ${theme.media.mobile}) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`;
