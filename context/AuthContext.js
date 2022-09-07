import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const signUp = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password);
		return;
	};

	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unSub = onAuthStateChanged(auth, async (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unSub;
	}, []);

	const value = {
		currentUser,
		logIn,
		signUp,
		logOut,
	};
	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
