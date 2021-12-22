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

export const Links = styled.div``;

export const Link = styled(NavLink)`
	color: white;
	text-decoration: none;
	margin-right: 10px;
	text-transform: uppercase;
`;
