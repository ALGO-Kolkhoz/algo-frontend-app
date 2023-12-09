import React from 'react';
import { Input } from '@mui/material';

const StockForecast = () => {
	return (
		<div className='flex flex-1 h-screen'>
			<div className='w-1/3 items-center justify-center'>
				<Input
					placeholder='Search in list 1'
					inputProps={{ style: { color: 'white' } }}
					style={{ color: 'white' }}
				/>
			</div>
			<div className='w-0.5 bg-gray-500'></div>
			<div className='w-2/3 flex flex-col'>
				<div className='flex-1/3 p-4 bg-gray-500'></div>
				<div className='flex-1/3 p-4 bg-gray-500'></div>
				<div className='flex-1/3 p-4 bg-gray-500'></div>
				<div className='text-center '></div>
			</div>
		</div>
	);
};

export default StockForecast;
