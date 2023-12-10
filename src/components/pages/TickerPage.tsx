import 'highcharts/modules/accessibility';
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import darkUnica from 'highcharts/themes/dark-unica';
import { Tabs, Tab, Grid, TextField } from '@mui/material';
import { stocksArr } from '../../common/stocks';
import { nanoid } from 'nanoid';
import SearchIcon from '@mui/icons-material/Search';
import GodFather from '../../common/services/GodFather';

Highcharts.setOptions({
	lang: {
		loading: 'Подождите...',
		months: [
			'Январь',
			'Февраль',
			'Март',
			'Апрель',
			'Май',
			'Июнь',
			'Июль',
			'Август',
			'Сентябрь',
			'Октябрь',
			'Ноябрь',
			'Декабрь',
		],
		weekdays: [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота',
		],
		shortMonths: [
			'Янв',
			'Фев',
			'Мар',
			'Апр',
			'Май',
			'Июн',
			'Июл',
			'Авг',
			'Сен',
			'Окт',
			'Ноя',
			'Дек',
		],
		rangeSelectorFrom: 'С',
		rangeSelectorTo: 'По',
		rangeSelectorZoom: 'Период',
		downloadPNG: 'Скачать изображение PNG',
		downloadJPEG: 'Скачать изображение JPEG',
		downloadPDF: 'Скачать документ PDF',
		downloadSVG: 'Скачать изображение SVG',
		resetZoom: 'Сбросить',
		resetZoomTitle: 'Сброс',
		thousandsSep: ' ',
		decimalPoint: ',',
	},
});

darkUnica(Highcharts);

export const getRandomValue = (min: number, max: number) => {
	return Math.random() * (max - min) + min;
};
export const generateMockData = () => {
	const startDate = new Date('2022-01-01');
	const data = [];

	for (let i = 0; i < 100; i++) {
		const currentDate = new Date(startDate);
		currentDate.setDate(startDate.getDate() + i);

		const open = getRandomValue(100, 150);
		const high = getRandomValue(open, 200);
		const low = getRandomValue(50, open);
		const close = getRandomValue(low, high);

		data.push([currentDate.getTime(), open, high, low, close]);
	}

	return data;
};

const generateRandomLinearData = () => {
	const data = [];

	for (let i = 0; i < 100; i++) {
		data.push([
			generateMockData()[i][0], // Use the same timestamp as the candlestick data
			getRandomValue(80, 120), // Random linear data
		]);
	}

	return data;
};
const initialOptions = {
	// title, series
	credits: {
		enabled: false,
	},
	chart: {
		animation: true,
		type: 'candlestick',
		zoomtype: 'x',
	},
	xAxis: {
		type: 'datetime',
	},
	tooltip: {
		shared: true,
	},
	plotOptions: {
		series: {
			minPointLength: 3,
			dataGrouping: {
				enabled: false,
			},
		},
	},
	yAxis: [
		{
			title: {
				text: 'Цена акции',
			},
		},
		{
			title: { text: '' },
			opposite: true,
		},
		{
			title: {
				text: '',
			},
			opposite: true,
		},
	],
	rangeSelector: {
		selected: 2,
		inputEnabled: true,
		enabled: true,
	},

	navigator: {
		enabled: true,
		xAxis: {
			dateTimeLabelFormats: {
				day: '%b %e', // Customize the date format on the navigator
			},
		},
	},
};

const TickerPage = () => {
	const options = {
		title: {
			text: 'Candlestick Chart',
		},
		credits: {
			enabled: false,
		},
		chart: {
			animation: true,
			type: 'candlestick',
			zoomtype: 'x',
		},
		xAxis: {
			type: 'datetime',
		},
		tooltip: {
			shared: true,
		},
		plotOptions: {
			series: {
				minPointLength: 3,
				dataGrouping: {
					enabled: false,
				},
			},
		},
		yAxis: [
			{
				title: {
					text: 'Stock Price',
				},
			},
			{
				title: { text: '' },
				opposite: true,
			},
			{
				title: {
					text: '',
				},
				opposite: true,
			},
		],
		rangeSelector: {
			buttons: [
				{
					type: 'day',
					count: 1,
					text: '1D',
				},
				{
					type: 'week',
					count: 1,
					text: '1W',
				},
				{
					type: 'all',
					count: 1,
					text: 'All',
				},
			],
			selected: 2,
			inputEnabled: true,
			enabled: true,
		},
		navigator: {
			enabled: true,
			xAxis: {
				dateTimeLabelFormats: {
					day: '%b %e', // Customize the date format on the navigator
				},
			},
		},

		series: [
			{
				type: 'candlestick',
				name: 'Stock Price',
				data: generateMockData(),
				showInNavigator: true,
				tooltip: {
					valueDecimals: 2,
				},
			},
			{
				type: 'line',
				name: 'Random Linear Data',
				data: generateRandomLinearData(),
				color: GodFather.randomColorGenerator(),
				showInNavigator: false,
				marker: {
					enabled: false,
				},
			},
			{
				type: 'line',
				name: 'Linear Graph 2',
				data: generateRandomLinearData(),
				color: GodFather.randomColorGenerator(), // Set the color for this series
				showInNavigator: false,
				marker: {
					enabled: false,
				},
			},
		],
	};
	const initialObjectsArr = [
		{
			id: 'PER_10_MIN',
			label: '10 минутный период',
			value: 1,
		},
		{
			id: 'PER_DAY',
			label: 'Однодневный период',
			value: 2,
		},
		{
			id: 'PER_WEEK',
			label: 'Недельный период',
			value: 3,
		},
	];
	const [leftValue, setLeftValue] = useState<number>(0);
	const [searchQuery, setSearchQuery] = useState<string>('');

	const [currentTicker, setCurrentTicker] = useState<string>('FIVE');

	const handleLeftChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setLeftValue(newValue);
	};

	useEffect(() => {
		const tickTime = initialObjectsArr[leftValue];
		const buttons = GodFather.buttonGenerator(tickTime.id);

		const tmpOptions = {
			...initialOptions,
			rangeSelector: { ...initialOptions.rangeSelector, buttons },
		};

		console.log(tmpOptions);

		//series adding
	});

	const filteredArrList = stocksArr.filter((item) => {
		return item.fullName
			.concat(item.tickerName.replace('$', ''))
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
	});

	return (
		<div className='flex flex-1 h-screen'>
			<div className='w-[290px] p-5 items-center justify-center'>
				<div>
					<TextField
						placeholder='Search'
						InputProps={{
							endAdornment: <SearchIcon />,
						}}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
					{filteredArrList.map((item) => {
						return (
							<div
								key={nanoid()}
								className=' flex items-center cursor-pointer '
								onClick={() => setCurrentTicker(item.tickerName)}
							>
								<img
									src={process.env.PUBLIC_URL + '/img/FIXP.png'}
									className=' w-5 h-5 shrink-0 rounded-full bg-gray-700 flex items-center justify-center'
								/>
								<div className=' text-lg text-yellow-400 underline ml-2'>
									{item.fullName + ' ($' + item.tickerName + ')'}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='w-0.5 bg-gray-500'></div>
			<div className='grow min-w-0 flex flex-col'>
				<div className='flex-1/3 p-4 bg-gray-500'>
					<Grid container>
						<Grid item xs={6}>
							<Tabs
								value={leftValue}
								onChange={handleLeftChange}
								sx={{ '& .MuiTabs-indicator': { backgroundColor: '#ff4081' } }}
							>
								<Tab label='Tab 1' value={0} style={{ color: '#fff' }} />
								<Tab label='Tab 2' value={1} style={{ color: '#fff' }} />
								<Tab label='Tab 3' value={2} style={{ color: '#fff' }} />
							</Tabs>
						</Grid>

						{/* <Grid item xs={6} style={{ textAlign: 'right' }}>
							<Tabs
								value={rightValue}
								onChange={handleRightChange}
								sx={{ '& .MuiTabs-indicator': { backgroundColor: '#ff9800' } }}
							>
								<Tab label='Tab 4' value={3} style={{ color: '#fff' }} />
								<Tab label='Tab 5' value={4} style={{ color: '#fff' }} />
								<Tab label='Tab 6' value={5} style={{ color: '#fff' }} />
							</Tabs>
						</Grid> */}
					</Grid>
				</div>
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
					updateArgs={[true, true, true]}
					containerProps={{ className: 'chartContainer' }}
				/>
			</div>
		</div>
	);
};

export default TickerPage;
