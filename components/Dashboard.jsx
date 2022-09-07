import React, { useState } from 'react';

const Dashboard = () => {
	const [todo, setTodo] = useState('');
	return (
		<div className='w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5'>
			<div className='flex items-stretch'>
				<input
					type='text'
					placeholder='Enter TODO'
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
					className='outline-none p-3 text-base sm:text-lg text-slate-900 flex-1'
				/>
				<button className='uppercase w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40'>
					Add
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
