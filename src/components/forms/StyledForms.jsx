import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

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

export const StyledForms = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${theme.colors.primary};
  color: white;
  min-height: 100vh;
  margin-top: 2rem;

  @media (max-width: ${theme.media.mobile}) {
    padding: 1rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${theme.media.tablet}) {
    flex-direction: column;
  }
`;

export const FormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 55%;

  @media (max-width: ${theme.media.tablet}) {
    width: 100%;
  }
`;

export const FormsRow = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${fadeInUp} 0.6s ease-out;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 15px;
  flex: 1;

  @media (max-width: 480px) {
    padding: 30px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 20px 0;
  animation: ${fadeInUp} 0.6s ease-out 0.2s backwards;
  text-align: center;
  color: #fff;
`;

export const FormDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 20px 0;
  animation: ${fadeInUp} 0.6s ease-out 0.4s backwards;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const FormField = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: #eee;
  pointer-events: none;
  transition: all 0.3s ease;
  font-size: 1rem;

  ${(props) =>
    props.isTextarea &&
    `
    top: 16px;
    transform: none;
  `}

  ${(props) =>
    props.isSelect &&
    `
    top: 60%;
    transform: translateY(-60%);
  `}
  
  &.broll-label {
    position: relative;
    top: -25px;
    left: 0;
    transform: none;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CaretDown = styled.div`
  position: absolute;
  right: 0px;
  top: -20px;
  transform: translateY(-70%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
  pointer-events: none;
  z-index: 1;
`;

export const FormSelect = styled.select`
  width: 103%;
  padding: 12px 16px;
  padding-right: 40px;
  border: 1px solid #da70d6;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: background 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 3rem;
  position: relative;
  z-index: 1;

  &:focus {
    background: rgba(63, 0, 51, 0.35);
  }

  option {
    background-color: ${theme.colors.primary};
    color: white;
    padding: 10px;
  }
`;

export const FormInput = styled.input`
  width: 98%;
  padding: 12px 16px;
  border: 1px solid #da70d6;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: background 0.3s ease;
  height: 3rem;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    background: rgba(63, 0, 51, 0.35);
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    padding: 0 6px;
    font-size: 12px;
    color: #fff;
  }
`;

export const FormTextarea = styled.textarea`
  width: 98%;
  padding: 12px 16px;
  border: 1px solid #da70d6;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: background 0.3s ease;
  resize: vertical;
  min-height: 100px;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    background: rgba(63, 0, 51, 0.35);
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    padding: 0 6px;
    font-size: 12px;
    color: #fff;
  }
`;

export const FormButton = styled.button`
  width: 80%;
  padding: 12px;
  background: linear-gradient(45deg, #8a2be2, #da70d6);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin: 10px auto;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const FormCheckbox = styled.input`
  margin-right: 0.5rem;
  transition: all 0.3s ease;

  &:checked {
    accent-color: #ff6b6b;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const FormRange = styled.input`
  -webkit-appearance: none;
  width: 50%;
  height: 5px;
  background: transparent;
  cursor: pointer;
  margin: 1rem 0;

  &::-webkit-slider-runnable-track {
    height: 8px;
    background: linear-gradient(90deg, #ffcdff 0%, #b10680 100%);
    border-radius: 4px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background: #ffffff;
    border: 2px solid #da70d6;
    border-radius: 50%;
    margin-top: -6px;
    transition: background 0.3s ease;
  }

  &::-webkit-slider-thumb:hover {
    background: #ff4fb6;
  }
`;

export const RangeValue = styled.span`
  font-size: 1rem;
  color: white;
  display: block;
  text-align: center;
  margin-top: 0.5rem;
`;

export const VideosContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
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

  @media (max-width: ${theme.media.tablet}) {
    width: 100%;
    max-height: none;
  }
`;

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
`;

export const VideoItem = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  height: 200px !important;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  iframe {
    width: 100%;
    height: 200px;
    border: none;
  }
`;

export const VideoTitle = styled.h3`
  display: none;
`;
