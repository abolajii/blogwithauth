import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	top: 90px;
`;

export const Inner = styled.div`
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 15px;
	color: black;
`;

export const Text = styled.p`
	margin-bottom: 2rem;
	font-size: 19px;
`;

export const Button = styled.button`
	width: 120px;
	border: none;
	background-color: teal;
	color: white;
	padding: 0.5rem;
	outline: none;
	font-size: 17px;
	border-radius: 3px;
	cursor: pointer;
`;

export const NameSpan = styled.span`
	font-weight: bold;
	padding-left: 0.6rem;
`;

export const Card = styled.div`
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
	flex: 1;
	border-radius: 3px;

	overflow: hidden;
`;

export const ImageContainer = styled.div`
	height: 30vh;
	background-color: teal;
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Bottom = styled.div`
	padding: 1rem;
`;

export const Loader = styled.div`
	height: 22px;
	margin: 10px 0;
`;

export const Author = styled.p``;

export const Dates = styled.p`
	height: 10px;
`;

export const Desc = styled.p``;
