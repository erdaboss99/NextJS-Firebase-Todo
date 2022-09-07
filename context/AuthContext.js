import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	function signUp(email, password) {
		createUserWithEmailAndPassword(auth, email, password);
		return;
	}

	function logIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logOut() {
		return signOut(auth);
	}

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
}
