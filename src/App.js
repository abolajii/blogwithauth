import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import SecureRoutes from './components/SecureRoutes';
import IsUserRedirect, { Cra } from './components/Auth';
import SignUp from './components/Signup';
import 'react-datepicker/dist/react-datepicker.css';
const Example = () => {
	return (
		<>
			{/* <Toastify /> */}
			<Header />
			<Routes>
				<Route element={<Cra />}>
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
				</Route>
				<Route element={<IsUserRedirect />}>
					<Route path='/*' element={<SecureRoutes />} />
				</Route>
			</Routes>
		</>
	);
};

export default Example;
