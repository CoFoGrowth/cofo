import styled, { keyframes } from "styled-components";
import { theme } from "../../../theme";

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

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const AvatarsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
  background: rgba(10, 1, 24, 0.7);
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: ${fadeInUp} 0.6s ease-out;
  color: white;

  @media (max-width: ${theme.media.tablet}) {
    padding: 15px;
    max-width: 95%;
  }

  @media (max-width: ${theme.media.mobile}) {
    padding: 10px;
    max-width: 95%;
  }
`;

export const AvatarsTitle = styled.h2`
  font-size: 2rem;
  margin: 0 0 20px 0;
  text-align: center;
  color: #fff;
  animation: ${fadeInUp} 0.6s ease-out 0.2s backwards;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

export const LoadingInfo = styled.div`
  font-size: 1.1rem;
  text-align: center;
  color: #ff7fc2;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ErrorMessage = styled.p`
  color: #ff6b6b;
  text-align: center;
  margin: 1rem 0;
  padding: 10px;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 107, 0.3);
`;

export const AvatarsScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const AvatarsGrid = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;

  @media (max-width: ${theme.media.tablet}) {
    gap: 15px;
    padding: 15px 0;
  }

  @media (max-width: ${theme.media.mobile}) {
    gap: 10px;
    padding: 10px 0;
    justify-content: center;
  }
`;

export const AvatarItem = styled.div`
  background: rgba(43, 16, 86, 0.8);
  border-radius: 12px;
  min-width: 200px;
  width: 200px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 127, 194, 0.2);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(255, 127, 194, 0.3);
    border-color: rgba(255, 127, 194, 0.5);
  }

  @media (max-width: ${theme.media.tablet}) {
    min-width: 180px;
    width: 180px;
  }

  @media (max-width: ${theme.media.mobile}) {
    min-width: 150px;
    width: 150px;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${theme.media.tablet}) {
    height: 160px;
  }

  @media (max-width: ${theme.media.mobile}) {
    height: 140px;
  }
`;

export const AvatarInfo = styled.div`
  padding: 15px;

  @media (max-width: ${theme.media.mobile}) {
    padding: 10px;
  }
`;

export const AvatarName = styled.h4`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1rem;
  }
`;

export const AvatarId = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 0.8rem;
  }
`;

export const AvatarType = styled.span`
  display: inline-block;
  margin-top: 8px;
  padding: 4px 8px;
  background: rgba(255, 127, 194, 0.2);
  color: #ff7fc2;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const AvatarsCount = styled.h3`
  color: #ff7fc2;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
  text-align: center;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 1.1rem;
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ff7fc2;
  animation: ${spin} 1s ease-in-out infinite;
`;
