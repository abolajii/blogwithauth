import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	top: 60px;
	padding: 1rem;
`;

export const Inner = styled.div`
	width: 500px;
	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
	margin: auto;
	margin-top: 3rem;
	height: 400px;
	border-radius: 5px;

	padding: 1.5rem;
`;

export const Text = styled.p`
	font-size: 26px;
	margin-bottom: 1rem;
`;

export const SmallText = styled.p`
	line-height: 1.8;
`;

export const InputLabel = styled.p`
	line-height: 1.9;
`;

export const InputContainer = styled.div`
	margin: 1rem 0;
`;

export const Input = styled.input`
	height: 40px;
	width: 100%;
	padding: 0.5rem;
`;

export const Submit = styled.button`
	width: 100%;
	padding: 1rem;
	font-size: 16px;
	border-radius: 6px;
	background: teal;
	margin-bottom: 15px;
	color: white;
`;

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	.link {
		color: teal;
	}
`;
