import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { fetchUser } from '../../../../redux/action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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

import axios, { tokenToVerify } from '../../../../helper/axios';

const UpdateProfile = ({ setShowModal, showModal }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, loading } = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	useEffect(() => {
		if (user) {
			setFirstName(user.firstName);
			setLastName(user.lastName);
			setEmail(user.email);
			setDOB(user.dob);
			setUserName(user.userName);
		}
	}, [user]);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [dob, setDOB] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { firstName, lastName, email, dob, userName };

		const { id } = jwt.verify(tokenToVerify, process.env.REACT_APP_JWT_SECRET);
		axios
			.put(`/profile/update/${id}`, data)
			.then((response) => {
				navigate('/profile');
			})
			.catch((err) => console.log(err));
	};

	if (user === null || loading) {
		return <Container>Loading...</Container>;
	}

	return (
		<Container>
			<Inner onSubmit={handleSubmit}>
				<Text>Update Profile</Text>
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
						<Label>Date Of Birth</Label>
						<Input
							value={dob}
							onChange={({ target }) => setDOB(target.value)}
							placeholder='Enter your dob'
							type='text'
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
				</Top>
				<Dont>
					Or Update your password ?{' '}
					<button
						type='button'
						className='link'
						onClick={() => setShowModal(!showModal)}>
						Update Password
					</button>
				</Dont>
				<ButtonContainer>
					<SubmitButton>SAVE CHANGES</SubmitButton>
				</ButtonContainer>
			</Inner>
		</Container>
	);
};

export default UpdateProfile;
