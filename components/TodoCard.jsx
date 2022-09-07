import React from 'react';

function TodoCard(props) {
	const { children } = props;
	return (
		<div className='p-2 border flex items-strech border-white border-solid '>
			<div className='flex-1 flex'>{children}</div>
			<div className='flex items-center'>
				<i className='fa-solid fa-pencil px-2 duration-300 hover:rotate-45 cursor-pointer'></i>
				<i className='fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer'></i>
			</div>
		</div>
	);
}

export default TodoCard;
