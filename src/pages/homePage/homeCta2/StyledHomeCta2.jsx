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

export const StyledHomeCta2 = styled.section`
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
  gap: 2rem;

  @media (max-width: ${theme.media.tablet}) {
    flex-direction: column;
  }
`;

export const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeInLeft} 0.8s ease-out;

  @media (max-width: ${theme.media.tablet}) {
    text-align: center;
    align-items: center;
  }
`;

export const FormColumn = styled.div`
  flex: 1;
  background: linear-gradient(120deg, #ff7fc2 0%, #b47cfd 100%);
  border-radius: 15px;
  padding: 2rem;
  animation: ${fadeInRight} 0.8s ease-out;
`;

export const Subtitle = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: #b47cfd;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 1.5rem;
  color: white;

  @media (max-width: ${theme.media.mobile}) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2rem;
`;

export const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #b47cfd;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9a46ff;
    transform: translateY(-3px);
  }

  svg {
    margin-right: 0.5rem;
    width: 20px;
    height: 20px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 1.8rem;
  color: white;
  margin: 0 0 1.5rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
  }
`;

export const FormField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: white;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  background-color: white;
  color: #b47cfd;
  border: none;
  border-radius: 30px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
  }

  svg {
    margin-right: 0.5rem;
  }
`;
