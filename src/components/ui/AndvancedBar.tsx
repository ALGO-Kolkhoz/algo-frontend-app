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
					className='cursor-pointer'
					onClick={() => {
						navigate('/recomended');
					}}
				>
					We recommend
				</div>
			</div>
			<div className='flex items-center'>
				<div className='mr-4'>Wallet</div>
				<div className='mr-4'>Fiat</div>
				<div
					className={classNames('px-2 py-1 rounded', {
						'bg-green-500': true, // Add your logic here for dynamic color
						'bg-red-500': false,
					})}
				>
					Buy Crypto
				</div>
			</div>
		</div>
	);
};

export default AdvancedBar;
