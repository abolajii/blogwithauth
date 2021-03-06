import styled from 'styled-components';

export const Container = styled.div`
	padding: 1rem;
`;

export const Inner = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
`;

export const Posts = styled.div`
	display: grid;
	gap: 15px;
	grid-template-columns: repeat(3, 1fr);
`;

export const Text = styled.p`
	margin: 2rem 0;
	font-size: 19px;
	height: 30px;
	width: 100%;
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
	padding-left: 0.3rem;
`;

export const Card = styled.div`
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
	flex: 1;
	border-radius: 3px;

	overflow: hidden;
`;

export const ImageContainer = styled.div`
	height: 30vh;
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const Bottom = styled.div`
	padding: 1rem;
`;

export const AuthorSkeleton = styled.p`
	width: 100%;
	height: 30px;
	margin: 6px 0;
`;
export const Author = styled.p`
	width: 100%;
	/* height: 30px; */
`;

export const Dates = styled.p``;

export const Desc = styled.p``;
