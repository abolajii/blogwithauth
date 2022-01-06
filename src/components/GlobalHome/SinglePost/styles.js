import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	position: relative;
	top: 60px;
	padding: 1rem;
`;

export const Inner = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
`;

export const BackContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Back = styled(Link)`
	text-decoration: none;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 0.9rem;
	width: 80px;
	background-color: teal;
`;

export const Top = styled.div`
	display: flex;
	align-items: center;
`;

export const ImageContainer = styled.div`
	height: 40vh;
	background-color: teal;
	border-radius: 3px;
	margin-bottom: 1rem;
	overflow: hidden;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Title = styled.h1`
	flex: 1;
`;

export const Icon = styled.div`
	flex: 2;
	.icon {
		cursor: pointer;
		margin: 0.5rem;
	}
`;

export const Middle = styled.div``;

export const Author = styled.p``;

export const Dates = styled.p``;

export const Desc = styled.p``;
