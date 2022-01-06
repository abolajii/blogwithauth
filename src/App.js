import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import SecureRoutes from './components/SecureRoutes';
import IsUserRedirect, { Cra } from './components/Auth';
import SignUp from './components/Signup';
import 'react-datepicker/dist/react-datepicker.css';
import GlobalHome from './components/GlobalHome';
import SinglePost from './components/GlobalHome/SinglePost';
import ForgotPassword from './components/ForgotPassword';
const Example = () => {
	// const [loading, setLoading] = useState(false);
	return (
		<>
			{/* <Toastify /> */}
			<Header />
			<Routes>
				<Route path='/singlepost/:id' element={<SinglePost />} />
				<Route element={<Cra />}>
					<Route path='/' element={<GlobalHome />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Route>
				<Route element={<IsUserRedirect />}>
					<Route path='/*' element={<SecureRoutes />} />
				</Route>
			</Routes>
		</>
	);
};

export default Example;
