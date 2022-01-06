import React, { useEffect, useState } from 'react';
import {
	Author,
	Bottom,
	Card,
	Container,
	Dates,
	Desc,
	Image,
	ImageContainer,
	Inner,
	Loader,
} from './styles';
import one from './img/1.jpg';
import axios from '../../helper/axios';

import { Link } from 'react-router-dom';
import Skeleton from '../Skeleton';
const GlobalHome = () => {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		setLoading(true);
		const getPost = async () => {
			const response = await axios.get('/post');
			setPosts(response.data);
			setLoading(false);
		};
		getPost();
	}, [posts]);

	if (loading) {
		return (
			<Container>
				<Inner>
					{Array(3)
						.fill()
						.map((each) => {
							return (
								<Card>
									<ImageContainer>
										<Skeleton />
									</ImageContainer>
									<Bottom>
										<Loader>
											<Skeleton />{' '}
										</Loader>
										<Loader>
											<Skeleton />
										</Loader>
										<Loader>
											<Skeleton />
										</Loader>
										<Loader>
											<Skeleton />
										</Loader>
									</Bottom>
								</Card>
							);
						})}
				</Inner>
			</Container>
		);
	}

	return (
		<Container>
			<Inner>
				{posts.map((post) => (
					<Card>
						<ImageContainer>
							<Image
								src={
									post.photo ? `http://localhost:5000/post/${post.photo}` : one
								}
								alt='post'
							/>
						</ImageContainer>
						<Bottom>
							<Link to={`/singlepost/${post._id}`}> {post.title}</Link>
							<Desc>{post.desc}</Desc>
							<Author>Author : {post.username}</Author>
							<Dates>{new Date(post.createdAt).toDateString()}</Dates>
						</Bottom>
					</Card>
				))}
			</Inner>
		</Container>
	);
};

export default GlobalHome;
