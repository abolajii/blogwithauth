import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Profile from './Profile';
import UpdateProfile from './Profile/UpdateProfile';
import Modal from './Profile/Modal';
import CreateModal from './CreatePost/Modal';
import SinglePost from '../GlobalHome/SinglePost';
import EditPost from '../SecureRoutes/Post/EditPost';

const Settings = () => <div>Settings</div>;
const Blog = () => <div>Blog</div>;

const Container = styled.div`
	position: relative;
	top: 60px;
`;

const SecureRoutes = () => {
	const [showModal, setShowModal] = useState(false);
	const [createPost, setCreatePost] = useState(false);

	return (
		<>
			<Container>
				<Routes>
					<Route path='home' element={<Home setCreatePost={setCreatePost} />} />
					<Route path='settings' element={<Settings />} />
					<Route path='edit/:id' element={<EditPost />} />
					<Route path='profile' element={<Profile />} />
					<Route path='/singlepost' element={<SinglePost />} />
					<Route
						path='profile/updateprofile'
						element={
							<UpdateProfile
								showModal={showModal}
								setShowModal={setShowModal}
							/>
						}
					/>
					<Route path='blog' element={<Blog />} />
				</Routes>
			</Container>
			{showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
			{createPost && <CreateModal setCreatePost={setCreatePost} />}
		</>
	);
};

export default SecureRoutes;
