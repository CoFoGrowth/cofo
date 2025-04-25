import styled, { keyframes } from "styled-components";
import { theme } from "../../../theme";

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

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const rotateText = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const StyledHomeWhy = styled.section`
  padding: 6rem 2rem;
  background-color: #0c0a12;
  color: white;

  @media (max-width: ${theme.media.mobile}) {
    padding: 3rem 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;

  @media (max-width: ${theme.media.tablet}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ImageColumn = styled.div`
  flex: 1;
  position: relative;
  animation: ${fadeInLeft} 0.8s ease-out;
`;

export const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  animation: ${fadeInRight} 0.8s ease-out;
`;

export const ImageWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    object-position: center center;
    opacity: 0.5;
    filter: brightness(100%) contrast(100%) saturate(0%) blur(0px)
      hue-rotate(0deg);
    transition-duration: 1s;
    border-radius: 10px;
    display: block;
  }

  &:hover img {
    opacity: 0.8;
    filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
      hue-rotate(0deg);
    transform: scale(1.05);
  }
`;

export const CircleText = styled.div`
  position: absolute;
  top: -25px;
  left: -25px;
  width: 150px;
  height: 150px;
  animation: ${rotateText} 20s linear infinite;
  z-index: 2;
  display: block;

  svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  text {
    fill: #ff7fc2;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  @media (max-width: ${theme.media.mobile}) {
    display: none;
  }
`;

export const SubTitle = styled.h6`
  font-size: 16px;
  margin: 0;
  text-transform: uppercase;
  color: #ff7fc2;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0;
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
`;
