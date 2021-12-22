import styled from 'styled-components/macro';

export const Container = styled.div`
	/* padding: 1rem; */
	max-width: 700px;
	margin: auto;
`;

export const Inner = styled.div`
	margin: 1rem;
	box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
	padding: 1rem;
`;

export const Text = styled.p`
	color: teal;
	font-size: 29px;
	padding: 1rem 0;
	font-weight: bold;
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
`;

export const SmallText = styled.p`
	font-size: 17px;
	font-weight: bold;
	width: 130px;
	color: teal;
`;

export const Title = styled.p`
	font-size: 15px;

	background-color: teal;
	min-width: 200px;
	padding: 0.4rem;
	border-radius: 3px;
	color: white;
`;
