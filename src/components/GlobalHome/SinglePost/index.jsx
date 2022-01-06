import React, { useContext, useEffect, useState } from 'react';
import {
	Container,
	Inner,
	Back,
	BackContainer,
	Title,
	Author,
	Middle,
	Desc,
	Top,
	Icon,
	ImageContainer,
	Image,
	Dates,
} from './styles';

import one from '../img/1.jpg';
import { GlobalContext } from '../../../context/GlobalContext';
import axios from '../../../helper/axios';

import { FiEdit2 } from 'react-icons/fi';
import { BiTrash } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';

const SinglePost = () => {
	const { id } = useParams();
	const { user } = useContext(GlobalContext);
	const [post, setPost] = useState({});

	useEffect(() => {
		const getSinglePost = async () => {
			const response = await axios.get(`/post/${id}`);
			setPost(response.data);
		};

		getSinglePost();
	}, [id]);
	return (
		<Container>
			<BackContainer>
				<Back to='/'>BACK</Back>
			</BackContainer>
			<Inner>
				<ImageContainer>
					<Image src={one} alt='' />
				</ImageContainer>
				{Object.keys(post).length > 0 && (
					<>
						<Top>
							<Title>{post.title}</Title>
							{user ? (
								<Icon>
									<Link to={`/edit/${id}`}>
										<FiEdit2
											onClick={() => alert('edit')}
											className='icon'
											color='green'
											size={18}
										/>
									</Link>
									<BiTrash
										onClick={() => alert('delete')}
										className='icon'
										color='crimson'
										size={18}
									/>
								</Icon>
							) : null}
						</Top>
						<Middle>
							<Author>Author : {post.username}</Author>

							<Dates>{new Date(post.createdAt).toDateString()}</Dates>
						</Middle>
						<Desc>{post.desc}</Desc>
					</>
				)}
			</Inner>
		</Container>
	);
};

export default SinglePost;
