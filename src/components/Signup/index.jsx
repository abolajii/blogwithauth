import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
	ButtonContainer,
	Container,
	Dont,
	Inner,
	Input,
	InputContainer,
	Label,
	SubmitButton,
	Text,
	Top,
} from './styles';
import axios from 'axios';

const SignUp = () => {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [dob, setDOB] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { firstName, lastName, email, password, dob, userName };

		axios
			.post('http://localhost:5000/user/signup', data)
			.then((response) => {
				const accessToken = response.data.accessToken;
				const userName = response.data.userName;

				const data = { userName, accessToken };

				localStorage.setItem('token', JSON.stringify(data));
				// navigate('/login');

				navigate('/home');
			})
			.catch((error) => console.log(error));
	};

	return (
		<Container>
			<Inner onSubmit={handleSubmit}>
				<Text>Sign Up</Text>
				<Top>
					<InputContainer>
						<Label>First Name</Label>
						<Input
							value={firstName}
							onChange={({ target }) => setFirstName(target.value)}
							placeholder='Enter your first name'
							type='text'
						/>
					</InputContainer>
					<InputContainer>
						<Label>Last Name</Label>
						<Input
							value={lastName}
							onChange={({ target }) => setLastName(target.value)}
							placeholder='Enter your last name'
							type='text'
						/>
					</InputContainer>
				</Top>
				<Top>
					<InputContainer>
						<Label>Username</Label>
						<Input
							value={userName}
							onChange={({ target }) => setUserName(target.value)}
							placeholder='Enter your username'
							type='text'
						/>
					</InputContainer>
					<InputContainer>
						<Label>Password</Label>
						<Input
							value={password}
							onChange={({ target }) => setPassword(target.value)}
							placeholder='Enter your password'
							type='password'
						/>
					</InputContainer>
				</Top>
				<Top>
					<InputContainer>
						<Label>Email</Label>
						<Input
							value={email}
							onChange={({ target }) => setEmail(target.value)}
							placeholder='Enter your email'
							type='email'
						/>
					</InputContainer>
					<InputContainer>
						<Label>Date Of Birth</Label>
						<Input
							value={dob}
							onChange={({ target }) => setDOB(target.value)}
							placeholder='Enter your dob'
							type='text'
						/>
						{/* <DatePicker/ */}
					</InputContainer>
				</Top>
				<ButtonContainer>
					<SubmitButton>Sign Up</SubmitButton>
				</ButtonContainer>
				<Dont>
					Have an account ?{' '}
					<Link className='link' to='/login'>
						Login
					</Link>
				</Dont>
			</Inner>
		</Container>
	);
};

export default SignUp;
