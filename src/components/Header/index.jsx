import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import img from './img.jpeg';

import {
	Container,
	Image,
	ImageContainer,
	Inner,
	Link,
	Links,
	Logo,
	Search,
} from './styles';

const Header = () => {
	const location = useLocation();
	console.log(location);

	const { user } = useContext(GlobalContext);
	return (
		<Container>
			<Inner>
				<Link to='/'>
					<Logo>ABJ.</Logo>
				</Link>
				<Links>
					{user === null &&
						location.pathname !== '/forgot-password' &&
						location.pathname !== '/login' &&
						location.pathname !== '/signup' && (
							<>
								<Link to='/login'>Sign In</Link>
								<Link to='/signup'>Sign Up</Link>
							</>
						)}

					{user !== null && <Search placeholder='Search' />}
				</Links>
				{user && (
					<Link to='profile'>
						<ImageContainer>
							<Image src={img} alt='Profile' />
						</ImageContainer>
					</Link>
				)}
			</Inner>
		</Container>
	);
};

export default Header;
