import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import Toastify from '../Toasify';
import {
	Container,
	Dont,
	Inner,
	Input,
	InputContainer,
	Label,
	SubmitButton,
	Text,
} from './styles';

const Login = () => {
	const navigate = useNavigate();
	const [resp] = useState(false);

	const { setUser, user } = useContext(GlobalContext);
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	useEffect(() => {
		if (localStorage.getItem('token')) {
			setUser(localStorage.getItem('token'));
		} else {
			setUser(null);
		}
	}, [setUser]);

	console.log(user);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { password, userName };

		axios
			.post('http://localhost:5000/user/login', data)
			.then((response) => {
				const accessToken = response.data.accessToken;
				const userName = response.data.userName;

				const data = { userName, accessToken };

				localStorage.setItem('token', JSON.stringify(data));
				navigate('/');
			})
			.catch((error) => console.log(error.msg));
	};

	return (
		<Container>
			{resp && <Toastify />}
			<Inner onSubmit={handleSubmit}>
				<Text>Log In</Text>
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
				<SubmitButton>Login</SubmitButton>
				<Dont>
					Don't have an account ?{' '}
					<Link className='link' to='/signup'>
						Signup
					</Link>
				</Dont>
			</Inner>
		</Container>
	);
};

export default Login;
