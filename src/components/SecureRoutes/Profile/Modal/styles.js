import styled, { keyframes } from 'styled-components';

const swift = keyframes`
   0% {
    -webkit-transform: rotateY(-20deg) rotateX(35deg) translate(-300px, -300px) skew(35deg, -10deg);
            transform: rotateY(-20deg) rotateX(35deg) translate(-300px, -300px) skew(35deg, -10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
`;

const tilt = keyframes`
0% {
    -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
            transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }`;

export const Container = styled.div`
	position: fixed;
	z-index: 99;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const Inner = styled.form`
	margin: auto;
	min-width: 350px;
	background-color: white;
	min-height: 300px;
	border-radius: 3px;
	padding: 2rem 1rem;
	animation: ${swift} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const Label = styled.div`
	color: teal;
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	border: 1px solid teal;
	border-radius: 3px;
	padding: 0.4rem;

	${({ bn }) => bn && `margin-top: 0.5rem`}
`;

export const Input = styled.input`
	height: 100%;
	border: none;
	width: 100%;
	padding-right: 0.5rem;
	outline: none;
`;

export const Button = styled.button`
	width: 100%;
	margin-top: 1rem;
	padding: 0.7rem;
	background-color: teal;
	border-radius: 3px;
	color: white;
	cursor: pointer;
`;

export const Second = styled.form`
	margin: auto;
	min-width: 350px;
	background-color: white;
	min-height: 300px;
	border-radius: 3px;
	padding: 2rem 1rem;
	animation: ${tilt} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; ;
`;

export const Top = styled.div`
	margin-bottom: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Span = styled.span`
	color: red;
	font-weight: bold;
	cursor: pointer;
`;

export const Red = styled.p`
	color: red;
	padding-top: 0.5rem;
	font-size: 11px;
`;
