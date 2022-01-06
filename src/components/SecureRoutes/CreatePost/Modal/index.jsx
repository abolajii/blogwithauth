import axios from '../../../../helper/axios';
import Axios from 'axios';

import React, { useState, useEffect } from 'react';
import {
	Container,
	InputContainer,
	Input,
	Inner,
	SubmitButton,
	ImageContainer,
	Image,
	Text,
	ButtonContainer,
	Middle,
	Add,
	Select,
	TitleInputContainer,
	TitleInput,
	SmallText,
} from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../../../redux/action/userAction';

const CreatePostModal = ({ setCreatePost }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.user);

	const [fileName, setFileName] = useState('');
	const [title, setTitle] = useState('');
	const [post, setPost] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [selected, setSelected] = useState(null);
	const handleChange = (e) => {
		setSelected(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisabled(true);
		const data = new FormData();
		data.append('file', selected);
		data.append('desc', post);
		data.append('title', title);
		data.append('username', user.userName);

		axios
			.post('/post/create', data)
			.then((response) => {
				console.log(response);
				setCreatePost(false);
				setDisabled(false);
				navigate('/home');
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container>
			<Inner onSubmit={handleSubmit}>
				<Text>Create Post</Text>
				<TitleInputContainer>
					<SmallText>Title</SmallText>
					<TitleInput
						onChange={({ target }) => setTitle(target.value)}
						placeholder='Enter Title'
						type='text'
					/>
				</TitleInputContainer>

				<InputContainer>
					<Input
						onChange={({ target }) => setPost(target.value)}
						placeholder='Create a post 🚀'
					/>
				</InputContainer>
				<Middle>
					Add an Image
					<Add />
					<Select name='file' onChange={handleChange} type='file' />
				</Middle>
				{fileName && <p>{fileName}</p>}

				<ButtonContainer>
					<SubmitButton disabled={disabled}>Send</SubmitButton>
				</ButtonContainer>
			</Inner>
		</Container>
	);
};

export default CreatePostModal;
