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

export const StyledHomeSolutions = styled.section`
  padding: 6rem 2rem;
  background-color: #0c0a12;
  color: white;

  @media (max-width: ${theme.media.mobile}) {
    padding: 3rem 1rem;
  }
`;

export const SolutionsContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const SolutionsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const SolutionsTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 auto;
  max-width: 800px;
  font-weight: bold;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 2rem;
  }
`;

export const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 2rem;

  @media (max-width: ${theme.media.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const CrmCard = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  height: 300px;
  animation: ${fadeInLeft} 0.8s ease-out;

  @media (max-width: ${theme.media.tablet}) {
    flex-direction: column;
    height: auto;
  }
`;

export const CrmInfo = styled.div`
  flex: 1;
  background: linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CrmImage = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${theme.media.tablet}) {
    min-height: 250px;
  }
`;

export const LeadGenCard = styled.div`
  grid-column: 2;
  grid-row: 1;
  background-color: #101520;
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: ${theme.media.tablet}) {
    grid-column: 1;
    grid-row: 2;
  }
`;

export const TimeCard = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: #101520;
  border-radius: 15px;
  padding: 2rem;
  animation: ${fadeInDown} 0.8s ease-out;

  @media (max-width: ${theme.media.tablet}) {
    grid-column: 1;
    grid-row: 3;
  }
`;

export const SocialMediaCard = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  height: 300px;
  animation: ${fadeInLeft} 0.8s ease-out;
  animation-delay: 0.2s;

  @media (max-width: ${theme.media.tablet}) {
    grid-row: 4;
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
  grid-column: 1 / span 2;
  grid-row: 3;
  background: linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%);
  border-radius: 15px;
  padding: 3rem;
  animation: ${fadeIn} 0.8s ease-out;
  animation-delay: 0.4s;

  @media (max-width: ${theme.media.tablet}) {
    grid-column: 1;
    grid-row: 5;
    padding: 2rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.75rem;
  margin: 0 0 1rem;
  font-weight: bold;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.5rem;
  }
`;

export const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
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

export const IconText = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

export const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    width: 40px;
    height: 40px;
    fill: #ff7fc2;
  }

  @media (max-width: ${theme.media.tablet}) {
    margin: 0 0 1.5rem;
  }
`;

export const Button = styled.a`
  display: inline-block;
  background-color: white;
  color: #b47cfd;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
