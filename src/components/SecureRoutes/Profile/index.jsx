import React, { useEffect } from 'react';
import { Container, Inner, Text, SmallText, Box, Title } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../../redux/action/userAction';
import { Link } from 'react-router-dom';

const Profile = () => {
	const dispatch = useDispatch();

	const { user, loading } = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	const Loading = () => {
		return (
			<Container>
				<Inner>Loading...</Inner>
			</Container>
		);
	};

	if (loading || user === null) {
		return <Loading />;
	} else {
		return (
			<Container>
				<Inner>
					<Text>Profile</Text>

					<Box>
						<SmallText>Username</SmallText>
						<Title> {user.userName}</Title>
					</Box>

					<Box>
						<SmallText>First Name</SmallText>
						<Title> {user.firstName}</Title>
					</Box>
					<Box>
						<SmallText>Last Name</SmallText>
						<Title> {user.lastName}</Title>
					</Box>
					<Box>
						<SmallText>Email</SmallText>
						<Title> {user.email}</Title>
					</Box>
					<Box>
						<SmallText>Date Of Birth</SmallText>
						<Title> {user.dob}</Title>
					</Box>

					<p>Click here to update your profile.</p>
					<Link to='updateprofile'>Update your profile</Link>
				</Inner>
			</Container>
		);
	}
};

export default Profile;
