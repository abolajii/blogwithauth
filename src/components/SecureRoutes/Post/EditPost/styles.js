import styled from 'styled-components';
import { RiAddCircleLine } from 'react-icons/ri';

export const Container = styled.div`
	padding: 1rem;
`;

export const Inner = styled.div``;

export const SmallText = styled.p`
	margin-top: 1rem;
	margin-bottom: 0.6rem;
`;

export const Title = styled.h1`
	font-size: 25px;
	color: teal;
	font-weight: 500;
	margin-top: 1rem;
`;

export const TitleInputContainer = styled.div``;

export const TitleInput = styled.input`
	width: 100%;
	border: 1px solid teal;
	padding: 0.5rem;
	border-radius: 3px;
	outline: none;
`;

export const Middle = styled.div`
	position: relative;
	width: 120px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Add = styled(RiAddCircleLine)``;

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

export const Select = styled.input`
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
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
