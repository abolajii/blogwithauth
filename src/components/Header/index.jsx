import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from './data';
import { Container, Inner, Link, Links, Logo } from './styles';

const Header = () => {
	const location = useLocation();

	return (
		<Container>
			<Inner>
				<Logo>ABJ.</Logo>
				{location.pathname === '/login' ||
				location.pathname === '/signup' ? null : (
					<Links>
						{data.map((link) => {
							return (
								<Link key={link.id} to={link.link}>
									{link.name}
								</Link>
							);
						})}
					</Links>
				)}
			</Inner>
		</Container>
	);
};

export default Header;
