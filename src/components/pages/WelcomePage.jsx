// src/WelcomePage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const WelcomePage = () => {
	const actions = [
		{ action: 'Action A', profitability: 10 },
		{ action: 'Action B', profitability: -5 },
		{ action: 'Action C', profitability: 20 },
	];
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='text-center'>
				<h1 className='text-4xl font-bold mb-4 text-white'>
					Welcome to Our Website
				</h1>
				<p className='text-lg text-gray-200'>Explore and enjoy our content.</p>
				<div className='mt-8'>
					<h2 className='text-xl font-bold mb-4 text-white'>
						Profitability Widget
					</h2>
					<div className='grid grid-cols-3 gap-4'>
						{actions.map((action, index) => (
							<div key={index} className='p-4 rounded shadow-md'>
								<h3 className='text-lg font-semibold mb-2'>{action.action}</h3>
								<p
									className={`text-lg ${
										action.profitability >= 0
											? 'text-green-500'
											: 'text-red-500'
									}`}
								>
									Profitability: {action.profitability}%{' '}
									{action.profitability > 0 ? (
										<FontAwesomeIcon
											icon={faArrowUp}
											className='text-green-500'
										/>
									) : (
										<FontAwesomeIcon
											icon={faArrowDown}
											className='text-red-500'
										/>
									)}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
