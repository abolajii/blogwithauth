import { useState } from 'react';
import {
	Container,
	InputContainer,
	Input,
	Inner,
	SubmitButton,
	// ImageContainer,
	// Image,
	Title,
	ButtonContainer,
	Middle,
	Add,
	Select,
	TitleInputContainer,
	TitleInput,
	SmallText,
} from './styles';

const EditPost = () => {
	const [fileName, setFileName] = useState('');
	const [title, setTitle] = useState('');
	const [post, setPost] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [selected, setSelected] = useState(null);
	const handleChange = (e) => {
		setSelected(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};

	return (
		<Container>
			<Inner>
				<Title>Edit Post</Title>
				<TitleInputContainer>
					<SmallText>Title</SmallText>
					<TitleInput
						onChange={({ target }) => setTitle(target.value)}
						type='text'
						value={title}
					/>
				</TitleInputContainer>

				<InputContainer>
					<Input
						value={post}
						onChange={({ target }) => setPost(target.value)}
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

export default EditPost;
