import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const IsUserRedirect = () => {
	const { user } = useContext(GlobalContext);

	return user ? <Outlet /> : <Navigate to={'/login'} />;
};

export const Cra = () => {
	const { user } = useContext(GlobalContext);
	const location = useLocation();

	return user !== null ? (
		<Navigate to={'/home'} replace state={{ from: location }} />
	) : (
		<Outlet />
	);
};

export default IsUserRedirect;
