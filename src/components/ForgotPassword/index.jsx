import React from 'react';
import { Link } from 'react-router-dom';
import {
	Container,
	Inner,
	Input,
	InputContainer,
	InputLabel,
	LinkContainer,
	SmallText,
	Submit,
	Text,
} from './styles';

const ForgotPassword = () => {
	return (
		<Container>
			<Inner>
				<Text>Forgot your password</Text>

				<SmallText>
					Please enter your email address registered for this account
				</SmallText>
				<InputContainer>
					<InputLabel>Enter email address</InputLabel>
					<Input placeholder='Enter your email address' />
				</InputContainer>
				<Submit>Request reset link</Submit>
				<LinkContainer>
					<Link className='link' to='/login'>
						Back to login
					</Link>
				</LinkContainer>
			</Inner>
		</Container>
	);
};

export default ForgotPassword;
