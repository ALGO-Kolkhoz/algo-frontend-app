import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const AdvancedBar = () => {
	const navigate = useNavigate();
	return (
		<div className='bg-gray-800 text-white p-4 flex items-center justify-between'>
			<div className='flex items-center'>
				<div
					className='mr-4 cursor-pointer'
					onClick={() => {
						navigate('/');
					}}
				>
					Kolkhoz Inc.
				</div>
				<div
					className='mr-4 cursor-pointer'
					onClick={() => {
						navigate('/split');
					}}
				>
					Your portfolio
				</div>
				<div
					className='mr-4 cursor-pointer'
					onClick={() => {
						navigate('/recomended');
					}}
				>
					We recommend
				</div>
				<div className='cursor-pointer' onClick={() => navigate('/ticker')}>
					Stock forecast
				</div>
			</div>
		</div>
	);
};

export default AdvancedBar;
