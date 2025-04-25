import styled, { keyframes } from "styled-components";
import { theme } from "../../../theme";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(225px);
  }
  to {
    transform: translateY(0);
  }
`;

export const StyledHomeTeam = styled.section`
  padding: 6rem 2rem;
  background-color: #0c0a12;
  color: white;

  @media (max-width: ${theme.media.mobile}) {
    padding: 3rem 1rem;
  }
`;

export const TeamContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const TeamSubTitle = styled.h6`
  font-size: 1rem;
  text-transform: uppercase;
  margin: 0 0 1rem;
  color: #ff7fc2;
  font-weight: 600;
`;

export const TeamTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const TeamCard = styled.div`
  position: relative;
  height: 620px;
  animation: ${fadeIn} 0.8s ease-out;
  animation-delay: ${(props) => props.delay || "0s"};
  border-radius: 20px;
  overflow: hidden;
`;

export const TeamMemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  opacity: 0.5;
  filter: brightness(100%) contrast(100%) saturate(0%) blur(0px)
    hue-rotate(0deg);
  transition-duration: 1s;

  ${TeamCard}:hover & {
    opacity: 0.8;
    filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
      hue-rotate(0deg);
  }
`;

export const TeamRole = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 127, 194, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TeamInfoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(12, 10, 18, 1) 70%,
    rgba(12, 10, 18, 0.8) 85%,
    rgba(12, 10, 18, 0) 100%
  );
  border-radius: 0 0 20px 20px;
  padding: 2rem;
  transition: transform 0.5s ease;
  min-height: 225px;
  max-height: 425px;
  overflow-y: auto;
  transform: translateY(${(props) => (props.isHovered ? "0" : "175px")});
  will-change: transform;

  /* Hide scrollbar but keep functionality */
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  ${TeamCard}:hover & {
    transform: translateY(0);
  }
`;

export const TeamMemberName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const TeamMemberSpeciality = styled.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #ff7fc2;
  margin-bottom: 1rem;
`;

export const TeamInfoBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const TeamInfoBox = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  border-radius: 10px;
  font-size: 0.85rem;
`;

export const TeamInfoBoxTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const TeamInfoBoxText = styled.div`
  color: rgba(255, 255, 255, 0.8);
`;

export const TeamDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
`;

export const TeamButton = styled.a`
  display: inline-block;
  background-image: linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 10;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
