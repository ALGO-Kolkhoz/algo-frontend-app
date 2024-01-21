import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import SVG from '../ui/SVG';

const WelcomePage = () => {
	const actions = [
		{ action: 'Средневзвешенная', profitability: 10 },
		{ action: 'Агрессивная', profitability: -5 },
		{ action: 'Консервативная', profitability: 20 },
	];

	const navigate = useNavigate();
	return (
		<div className='flex flex-col items-center justify-center h-[calc(100%-64px)]'>
			<div className='w-[960px] mx-auto grow flex flex-col justify-center '>
				<div className='flex gap-5'>
					<div className='flex flex-col justify-between'>
						<div className='text-[56px] leading-[64px] font-bold mb-4 text-yellow-300'>
							<div>
								<h1>
									Предскажем <br /> цену акций
								</h1>
							</div>
						</div>
						<div className='flex items-center gap-3 mt-3'>
							<button className=' rounded-xl  bg-yellow-300 text-black text-xl font-bold px-6 py-4 '>
								Собрать свой портфель
							</button>
							<button className='rounded-xl bg-slate-600 text-white text-xl font-bold px-6 py-4 '>
								Смотреть акции
							</button>
						</div>
					</div>
					<div>
						<div className='flex justify-center ml-7 grow h-[350px]'>
							<SVG />
						</div>
					</div>
				</div>

				<div className='mt-10'>
					<h2 className='text-2xl font-bold mb-4 text-white '>
						Результаты торговли по основным стратегиям за неделю
					</h2>
					<div className='grid grid-cols-3 gap-4'>
						{actions.map((action, index) => (
							<div key={index} className='px-6 py-5 rounded-md bg-slate-800'>
								<h3 className='text-lg font-semibold mb-2'>{action.action}</h3>
								<p
									className={`text-lg ${
										action.profitability >= 0
											? 'text-green-500'
											: 'text-red-500'
									}`}
								>
									Доходность: {action.profitability}%{' '}
									{action.profitability >= 0 ? (
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

			<div className='flex bg-black py-6 px-5 justify-between items-center gap-5 w-full'>
				<div className='opacity-50 text-md mt-auto mb-0 p-6y'>Text</div>
				<div className='opacity-50 text-md mt-auto mb-0 p-6y'>
					Copyright © 2023-2024 Kolkhoz Inc. All rights reserved.
				</div>
			</div>
		</div>
	);
};

export default WelcomePage;
