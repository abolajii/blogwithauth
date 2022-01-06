import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	/* height: 70px; */
	background-color: teal;
	padding: 1rem;
	z-index: 10;
`;

export const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
	font-family: Roboto;
`;

export const Logo = styled.div`
	font-size: 19px;
	letter-spacing: 1px;
`;

export const Links = styled.div`
	/* background-color: red; */
	/* flex: 0.7; */
	height: 40px;
	display: flex;
	align-items: center;
	border-radius: 4px;
	overflow: hidden;
`;

export const Search = styled.input`
	flex: 1;
	padding: 1rem;
	border: none;
	color: white;
	outline: none;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.1);
	::placeholder {
		color: #ddd;
	}
`;

export const Link = styled(NavLink)`
	color: white;
	text-decoration: none;
	margin-right: 10px;
	text-transform: uppercase;
`;

export const ImageContainer = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: teal;
	cursor: pointer;
	border: 1px solid white;
	overflow: hidden;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	background-position: top;
`;
