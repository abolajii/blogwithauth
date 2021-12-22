import React from 'react';
import { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
	const [globalData, setGlobalData] = useState({});
	const [user, setUser] = useState(
		localStorage.getItem('token') ? localStorage.getItem('token') : null
	);
	return (
		<GlobalContext.Provider
			value={{ globalData, user, setUser, setGlobalData }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
