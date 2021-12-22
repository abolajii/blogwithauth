import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	top: 60px;
`;

export const Text = styled.h4`
	color: teal;
	font-size: 29px;
	padding: 1rem 0;
`;

export const Inner = styled.form`
	width: 100%;
	margin: 1rem 0;
	margin: auto;
	color: white;
	max-width: 700px;
	/* height: 350px; */
	border-radius: 6px;
	padding: 1rem;
	box-shadow: 1px 5px 4px rgba(0, 0, 0, 0.1);
`;

export const Top = styled.div`
	display: grid;
	/* background-color: blue; */
	gap: 10px;
	grid-template-columns: repeat(2, 1fr);
`;

export const Label = styled.p`
	margin: 10px 0;
	color: teal;
	font-family: Roboto;
`;

export const InputContainer = styled.div`
	display: flex;
	/* background: red; */
	flex-direction: column;
	margin-bottom: 7px;
	/* width: 100%; */
`;

export const Input = styled.input`
	height: 40px;
	outline: none;
	border: 1px solid teal;
	padding: 0.6rem;
	border-radius: 3px;
	/* ${({ two }) => two && 'width: 50%'}; */
`;

export const ButtonContainer = styled.div``;

export const SubmitButton = styled.button`
	width: 50%;
	background-color: teal;
	outline: none;
	border: none;
	text-transform: uppercase;
	padding: 1rem;
	margin-top: 2rem;
	/* margin-bottom: 2rem; */
	border-radius: 3px;
	color: white;
	font-size: 16px;
	cursor: pointer;
`;

export const Dont = styled.div`
	padding-top: 0.7rem;
	color: teal;
	.link {
		background: none;
		text-decoration: underline;
		color: teal;
	}
`;
