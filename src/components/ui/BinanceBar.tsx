// src/BinanceBar.js
import React from 'react';
import classNames from 'classnames';

const BinanceBar = () => {
	return (
		<div className='bg-gray-800 text-white p-4 flex items-center justify-between'>
			<div className='flex items-center'>
				<div className='mr-4'>Binance</div>
				<div className='mr-4'>Markets</div>
				<div>Trade</div>
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

export default BinanceBar;
