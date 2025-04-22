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

export const StyledHomeOffer = styled.section`
  padding: 6rem 2rem;
  background-color: #070d15;
  color: white;

  @media (max-width: ${theme.media.mobile}) {
    padding: 3rem 1rem;
  }
`;

export const OfferContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${theme.media.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const VideoColumn = styled.div`
  grid-column: 1;
  animation: ${fadeInLeft} 0.8s ease-out;
`;

export const CardsColumn = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${theme.media.tablet}) {
    grid-column: 1;
  }
`;

export const VideoCard = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  min-height: 500px;
  background-color: #101520;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
`;

export const InfoCard = styled.div`
  border-radius: 15px;
  background-color: #101520;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: ${(props) =>
      props.animationType === "down" ? fadeInDown : fadeInUp}
    0.8s ease-out;
  min-height: 230px;
`;

export const SubTitle = styled.h6`
  font-size: 16px;
  margin: 0;
  text-transform: uppercase;
  color: #ff7fc2;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.size || "2.5rem"};
  margin: 0;
  line-height: 1.2;
  z-index: 2;
  position: relative;
`;

export const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  z-index: 2;
  position: relative;
`;

export const Button = styled.a`
  display: inline-block;
  background-image: linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 1.5rem;
  align-self: flex-start;
  z-index: 2;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const IconLink = styled.a`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(45deg);
  }

  i {
    color: white;
    font-size: 1.2rem;
  }
`;
