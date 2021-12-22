import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalContext } from '../../../context/GlobalContext';
import { fetchUser } from '../../../redux/action/userAction';
import { Button, Container, Inner, NameSpan, Text } from './styles';

const Home = () => {
	const dispatch = useDispatch();

	const { user, loading } = useSelector((state) => state.user);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			dispatch(fetchUser());
		}
	}, [dispatch]);
	const { setUser } = useContext(GlobalContext);

	const logOut = () => {
		localStorage.removeItem('token');
		setUser(null);
	};

	if (user === null || loading) {
		return <Container>Loading...</Container>;
	}

	return (
		<Container>
			<Inner>
				<Text>
					Welcome
					<NameSpan>{user.firstName}</NameSpan>
				</Text>
				<Button onClick={logOut}>Logout</Button>
			</Inner>
		</Container>
	);
};

export default Home;
