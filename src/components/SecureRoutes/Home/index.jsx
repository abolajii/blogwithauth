import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalContext } from '../../../context/GlobalContext';
import { fetchUser } from '../../../redux/action/userAction';
import { Link } from 'react-router-dom';
import CreatePost from '../CreatePost';

import {
	Author,
	AuthorSkeleton,
	Bottom,
	Button,
	Card,
	Container,
	Dates,
	Desc,
	Image,
	ImageContainer,
	Inner,
	NameSpan,
	Posts,
	Text,
} from './styles';

import axios from '../../../helper/axios';

import one from '../.././GlobalHome/img/1.jpg';
import Skeleton from '../../Skeleton';

const Home = ({ setCreatePost }) => {
	const dispatch = useDispatch();
	const [posts, setPosts] = useState([]);
	const { user, loading } = useSelector((state) => state.user);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(fetchUser());
		}
	}, [dispatch]);

	useEffect(() => {
		const getPost = async () => {
			const response = await axios.get('/post');
			setPosts(response.data);
		};
		getPost();
	}, [posts]);

	const { setUser } = useContext(GlobalContext);

	console.log(posts);

	const logOut = () => {
		localStorage.removeItem('token');
		setUser(null);
	};

	if (user === null || loading) {
		return (
			<Container>
				<Text>
					<Skeleton />
				</Text>

				<Text>
					<Skeleton />
				</Text>
				<Inner>
					<Skeleton />
					<Posts>
						<Card>
							<ImageContainer>
								<Skeleton />
							</ImageContainer>
							<Bottom>
								<AuthorSkeleton>
									<Skeleton border={5} />
								</AuthorSkeleton>
								<AuthorSkeleton>
									<Skeleton border={5} />
								</AuthorSkeleton>
								<AuthorSkeleton>
									<Skeleton border={5} />
								</AuthorSkeleton>
							</Bottom>
						</Card>
						<Card>
							<ImageContainer>
								<Skeleton />
							</ImageContainer>
							<Bottom>
								<AuthorSkeleton>
									<Skeleton border={5} />
								</AuthorSkeleton>
								<AuthorSkeleton>
									<Skeleton border={5} />
								</AuthorSkeleton>
								<AuthorSkeleton>
									<Skeleton border={5} />
								</AuthorSkeleton>
							</Bottom>
						</Card>
						<Card>
							<ImageContainer>
								<Skeleton />
							</ImageContainer>
							<Bottom>
								<AuthorSkeleton>
									<Skeleton border={5} />
								</AuthorSkeleton>
								<AuthorSkeleton>
									<Skeleton border={5} />
								</AuthorSkeleton>
								<AuthorSkeleton>
									<Skeleton border={5} />
								</AuthorSkeleton>
							</Bottom>
						</Card>
					</Posts>
				</Inner>
			</Container>
		);
	}

	return (
		<Container>
			<Text>
				Welcome Back,<NameSpan>{user.firstName}</NameSpan>
			</Text>
			<Button onClick={logOut}>Logout</Button>
			<Inner>
				<CreatePost setCreatePost={setCreatePost} />
				<Posts>
					{posts.map((post) => (
						<Card>
							<ImageContainer>
								<Image
									src={
										post.photo
											? `http://localhost:5000/post/${post.photo}`
											: one
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
				</Posts>
			</Inner>
		</Container>
	);
};

export default Home;
