import React from 'react';
import { Container, Icon, IconContainer, Inner, Text } from './styles';

const CreatePost = ({ setCreatePost }) => {
	return (
		<Container>
			<Inner>
				<IconContainer>
					<Text>Create a post</Text>
					<Icon onClick={() => setCreatePost(true)} size={25} color='teal' />
				</IconContainer>
			</Inner>
		</Container>
	);
};

export default CreatePost;
