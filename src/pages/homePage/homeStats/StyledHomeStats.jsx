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

const countUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledHomeStats = styled.section`
  padding: 5rem 2rem;
  background-color: #060104;
  color: white;

  @media (max-width: ${theme.media.mobile}) {
    padding: 3rem 1rem;
  }
`;

export const StatsContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.media.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${countUp} 0.8s ease-out backwards;
  animation-delay: ${(props) => props.delay || "0s"};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(255, 127, 194, 0.2);
  }
`;

export const StatTitle = styled.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  color: #ff7fc2;
  font-weight: 600;
`;

export const StatNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  margin-top: auto;
`;

export const StatPrefix = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export const StatNumber = styled.span`
  background: linear-gradient(120deg, #ff7fc2, #b47cfd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.5rem;
`;

export const StatSuffix = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;
