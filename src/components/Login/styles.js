import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	top: 60px;
	padding: 1rem;
`;

export const Text = styled.h4`
	color: teal;
	font-size: 29px;
	padding: 1rem 0;
`;

export const Inner = styled.form`
	width: 100%;
	margin: auto;
	margin-top: 40px;
	color: white;
	max-width: 400px;
	border-radius: 6px;
	padding: 1rem;
	box-shadow: 1px 5px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.p`
	margin: 10px 0;
	color: teal;
	font-family: Roboto;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Input = styled.input`
	height: 40px;
	outline: none;
	border: 1px solid teal;
	padding: 0.6rem;
	border-radius: 3px;
`;

export const SubmitButton = styled.button`
	width: 100%;
	background-color: teal;
	outline: none;
	border: none;
	text-transform: uppercase;
	padding: 1rem;
	margin-top: 2rem;
	/* margin-bottom: 1rem; */
	border-radius: 3px;
	color: white;
	font-size: 16px;
	cursor: pointer;
`;

export const Dont = styled.div`
	color: teal;
	.link {
		color: teal;
	}
`;

export const Password = styled.div`
	margin: 0.5rem 0;

	.link {
		color: teal;
	}
`;
