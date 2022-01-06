import styled, { keyframes } from 'styled-components';
import { RiAddCircleLine } from 'react-icons/ri';

const swing = keyframes`
 0% {
    -webkit-transform: rotateY(-35deg) rotateX(-20deg) translate(250px, 250px) skew(12deg, 15deg);
            transform: rotateY(-35deg) rotateX(-20deg) translate(250px, 250px) skew(12deg, 15deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }`;

export const Add = styled(RiAddCircleLine)``;

export const Container = styled.div`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	padding: 1rem;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const SmallText = styled.p`
	margin-top: 1rem;
	margin-bottom: 0.6rem;
`;

export const Text = styled.h2``;

export const Select = styled.input`
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const TitleInputContainer = styled.div``;

export const TitleInput = styled.input`
	width: 100%;
	border: 1px solid teal;
	padding: 0.5rem;
	border-radius: 3px;
	outline: none;
`;

export const Inner = styled.form`
	background-color: white;
	border-radius: 6px;
	max-width: 600px;
	margin: auto;

	padding: 1rem;

	min-height: 500px;
	-webkit-animation: ${swing} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	animation: ${swing} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const Middle = styled.div`
	position: relative;
	width: 120px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img``;

export const InputContainer = styled.div`
	margin: 1rem 0;
	height: 100px;
	border-radius: 3px;
	border: 1px solid teal;
`;

export const Input = styled.textarea`
	width: 100%;
	height: 100%;
	padding: 0.5rem;
	outline: none;
	border: none;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: end;
`;

export const SubmitButton = styled.button`
	width: 120px;
	background: teal;
	color: white;
	padding: 0.7rem;

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;
