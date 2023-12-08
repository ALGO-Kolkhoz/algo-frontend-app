import React from 'react';
import BinanceBar from '../ui/BinanceBar';
const WelcomePage = () => {
	const actions = [
		{ action: 'Action A', profitability: 10 },
		{ action: 'Action B', profitability: -5 },
		{ action: 'Action C', profitability: 20 },
	];
	return (
		<div class='h-90 w-full overflow-hidden bg-fixed'>
			<BinanceBar />
			<div className='flex items-center justify-center'>
				<div className='text-center'>
					<h1 className='text-4xl font-bold mb-4'>Welcome to Our Website</h1>
					<p className='text-lg text-gray-600'>
						Explore and enjoy our content.
					</p>
				</div>
			</div>

			<h2 className='text-xl font-bold mb-4'>Profitability Widget</h2>
			<div className='mt-8'>
				<h2 className='text-xl font-bold mb-4'>Profitability Widget</h2>
				<div className='grid grid-cols-3 gap-4'>
					{actions.map((action, index) => (
						<div key={index} className='bg-white p-4 rounded shadow-md'>
							<h3 className='text-lg font-semibold mb-2'>{action.action}</h3>
							<p
								className={`text-lg ${
									action.profitability >= 0 ? 'text-green-500' : 'text-red-500'
								}`}
							>
								Profitability: {action.profitability}%{' '}
								{action.profitability > 0 ? (
									<i className='fas fa-arrow-up text-green-500'></i>
								) : (
									<i className='fas fa-arrow-down text-red-500'></i>
								)}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
