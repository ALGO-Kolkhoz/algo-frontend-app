import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdvancedBar = () => {
	const navigate = useNavigate();
	return (
		<div className='bg-gray-800 text-white p-4 flex items-center justify-between'>
			<div
				className='mr-4 cursor-pointer text-yellow-300 font-bold text-lg'
				onClick={() => {
					navigate('/');
				}}
			>
				Kolkhoz Inc.
			</div>
			<div className='flex items-center text-lg'>
				<div
					className='mr-4 cursor-pointer'
					onClick={() => {
						navigate('/split');
					}}
				>
					Создать портфель
				</div>
				<div
					className='mr-4 cursor-pointer'
					onClick={() => {
						navigate('/recomended');
					}}
				>
					Рекомендованные акции
				</div>
				<div className='cursor-pointer' onClick={() => navigate('/ticker')}>
					Прогноз по акции
				</div>
			</div>
		</div>
	);
};

export default AdvancedBar;
