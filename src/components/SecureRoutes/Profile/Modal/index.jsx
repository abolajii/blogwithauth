import axios, { tokenToVerify } from '../../../../helper/axios';
import React, { useContext, useEffect, useState } from 'react';
import {
	Button,
	Container,
	Inner,
	Input,
	InputContainer,
	Label,
	Red,
	Second,
	Span,
	Top,
} from './styles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { GlobalContext } from '../../../../context/GlobalContext';

const Modal = ({ setShowModal, showModal }) => {
	const { setUser } = useContext(GlobalContext);

	const navigate = useNavigate();

	const [password, setPassword] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [error, setError] = useState('');
	const [current, setCurrent] = useState(1);
	const [eyeOff, setEyeOff] = useState('password');
	const [eyeOff2, setEyeOff2] = useState('password');

	useEffect(() => {
		if (error !== '') {
			setTimeout(() => {
				setError('');
			}, 3000);
		}
	}, [error]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { password };

		const { id } = jwt.verify(tokenToVerify, process.env.REACT_APP_JWT_SECRET);

		axios
			.post(`profile/verify/user/password/${id}`, data)
			.then((response) => {
				setCurrent(2);
				setPassword('');
			})
			.catch((err) => {
				setError('Wrong Password');
			});
	};

	const handleSubmitTwo = (e) => {
		const { id } = jwt.verify(tokenToVerify, process.env.REACT_APP_JWT_SECRET);
		e.preventDefault();
		if (password1 === password2) {
			const data = { password: password1 };
			axios

				.put(`/profile/update/${id}`, data)
				.then((response) => {
					localStorage.removeItem('token');
					navigate('/login');
					setUser(null);
				})
				.catch((err) => console.log(err));
		} else {
			setError(`Password don't match`);
		}
	};

	return (
		<Container>
			{current === 1 && (
				<>
					<Inner onSubmit={handleSubmit}>
						<Top>
							<Label>Confirm your password</Label>
							<Span onClick={() => setShowModal(!showModal)}>X</Span>
						</Top>
						<InputContainer>
							<Input
								value={password}
								onChange={({ target }) => setPassword(target.value)}
								placeholder='Enter your password'
								type={eyeOff}
							/>
							{eyeOff === 'password' ? (
								<AiOutlineEyeInvisible onClick={() => setEyeOff('text')} />
							) : (
								<AiOutlineEye onClick={() => setEyeOff('password')} />
							)}
						</InputContainer>
						{error && <Red>{error}</Red>}
						<Button>SUBMIT</Button>
					</Inner>
				</>
			)}

			{current === 2 && (
				<Second onSubmit={handleSubmitTwo}>
					<Top>
						<Label></Label>
						<Span onClick={() => setShowModal(!showModal)}>X</Span>
					</Top>
					<Label>Enter new password</Label>
					<InputContainer bn>
						<Input
							value={password1}
							onChange={({ target }) => setPassword1(target.value)}
							placeholder='Enter your new password'
							type={eyeOff}
						/>
						{eyeOff === 'password' ? (
							<AiOutlineEyeInvisible onClick={() => setEyeOff('text')} />
						) : (
							<AiOutlineEye onClick={() => setEyeOff('password')} />
						)}
					</InputContainer>

					<InputContainer bn>
						<Input
							value={password2}
							onChange={({ target }) => setPassword2(target.value)}
							placeholder='Confirm your new password'
							type={eyeOff2}
						/>
						{eyeOff2 === 'password' ? (
							<AiOutlineEyeInvisible
								onClick={() => setEyeOff2('text')}
								// size={13}
							/>
						) : (
							<AiOutlineEye onClick={() => setEyeOff2('password')} />
						)}
					</InputContainer>

					{error && <Red>{error}</Red>}
					<Button>SUBMIT</Button>
				</Second>
			)}
		</Container>
	);
};

export default Modal;
