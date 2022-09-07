import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [isLogginIn, setIsLogginIn] = useState(true);

	const { logIn, signUp, currentUser } = useAuth();

	const submitHandler = async () => {
		if (!email || !password) {
			setError('Please enter email and password!');
			return;
		}

		if (isLogginIn) {
			try {
				await logIn(email, password);
			} catch (error) {
				setError('Incorrect email or password!');
			}
			return;
		}
		await signUp(email, password);
	};

	return (
		<div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4'>
			<h1 className='font-extrabold select-none text-2xl sm:text-4xl uppercase'>
				{isLogginIn ? 'Login' : 'Register'}
			</h1>
			{error && (
				<div className='w-full max-w-[40ch] border-rose-400 border border-solid text-rose-400 text-center py-2'>
					{error}
				</div>
			)}
			<input
				type='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Email address'
				className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]'
			/>
			<input
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Password'
				className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]'
			/>
			<button
				onClick={submitHandler}
				className='w-full max-w-[40ch] border border-solid border-white py-2 uppercase duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900'>
				<h2 className='relative z-20'>Submit</h2>
			</button>
			<h2
				onClick={() => setIsLogginIn(!isLogginIn)}
				className='duration-300 hover:scale-110 cursor-pointer select-none'>
				{!isLogginIn ? 'Login' : 'Register'}
			</h2>
		</div>
	);
}

export default Login;
