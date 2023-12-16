import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import darkUnica from 'highcharts/themes/dark-unica';
import { getRandomValue } from '../TickerPage';
import { Tabs, Tab, Grid } from '@mui/material';
import GodFather from '../../../common/services/GodFather';

const shadesOfRed = ['#FF0800', '#C60C30', '#7C0A02']; // last is barn red first is light red
const shadesOfGreen = ['#66FF00', '#03C03C', '#018749']; // last is dark green first is light last is celtic fc green

export const generateMockPercentageData = () => {
	const startDate = new Date('2022-01-01');
	const data = [];
	for (let i = 0; i < 100; i++) {
		const currentDate = new Date(startDate);
		currentDate.setDate(startDate.getDate() + i);

		const percent = getRandomValue(10, 50);

		data.push([currentDate.getTime(), percent]);
	}

	return data;
};

const initialData = [
	{
		value: 1,
		id: 'conservative',
		label: 'Консервативная стратегия',
	},
	{
		value: 2,
		id: 'aggressive',
		label: 'Агрессивная стратегия',
	},
	{
		value: 3,
		id: 'common',
		label: 'Среднесрочная стратегия',
	},
];
const initialTickRateData = [
	{
		value: 4,
		id: 'PER_10_MIN',
		label: '10-минутный прогноз',
	},
	{
		value: 5,
		id: 'PER_DAY',
		label: 'Однодневный прогноз',
	},
	{
		value: 6,
		id: 'PER_WEEK',
		label: 'Недельный прогноз',
	},
];

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

export const options = {
	title: {
		text: 'Рекомендованные акции',
	},
	credits: {
		enabled: false,
	},
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
	plotOptions: {
		series: {
			compare: 'percent',
			showInNavigator: true,
			enableMouseTracking: true,
		},
	},
	xAxis: {
		type: 'datetime',
	},
	yAxis: {
		labels: {
			format: '{#if (gt value 0)}+{/if}{value}%',
		},
		plotLines: [
			{
				value: 0,
				width: 2,
				color: 'silver',
			},
		],
	},
	tooltip: {
		pointFormat:
			'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
		valueDecimals: 2,
		split: true,
	},
	series: [
		{
			type: 'line',
			name: 'Stock Price',
			animation: true,
			data: generateMockPercentageData(),
			showInNavigator: true,
			tooltip: {
				valueDecimals: 2,
			},
			color: GodFather.randomColorGenerator(),
			colorAxis: '#66FF00',
			cursor: 'cell',
			marker: {
				enabled: false,
			},
		},
		{
			type: 'line',
			name: 'Stock Price 1',
			animation: true,
			data: generateMockPercentageData(),
			showInNavigator: true,
			tooltip: {
				valueDecimals: 2,
			},
			color: GodFather.randomColorGenerator(),
			colorAxis: '#03C03C',
			cursor: 'cell',
			marker: {
				enabled: false,
			},
		},
		{
			type: 'line',
			name: 'Stock Price',
			animation: true,
			data: generateMockPercentageData(),
			showInNavigator: true,
			tooltip: {
				valueDecimals: 2,
			},
			color: GodFather.randomColorGenerator(),
			colorAxis: 'orange',
			cursor: 'cell',
			marker: {
				enabled: false,
			},
		},
	],
};

const initialOptions = {
	title: {
		text: 'Рекомендованные акции',
	},
	credits: {
		enabled: false,
	},
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
	plotOptions: {
		series: {
			compare: 'percent',
			showInNavigator: true,
			enableMouseTracking: true,
		},
	},
	xAxis: {
		type: 'datetime',
	},
	yAxis: {
		labels: {
			format: '{#if (gt value 0)}+{/if}{value}%',
		},
		plotLines: [
			{
				value: 0,
				width: 2,
				color: 'silver',
			},
		],
	},
	tooltip: {
		pointFormat:
			'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
		valueDecimals: 2,
		split: true,
	},
};

const initialSeriesObject = {
	// name, color, colorAxis, data needed
	type: 'line',
	animation: true,
	showInNavigator: true,
	tooltip: {
		valueDecimals: 2,
	},
	cursor: 'cell',
	marker: {
		enabled: false,
	},
};
const RecommendedPage = () => {
	const [leftValue, setLeftValue] = useState<any>(initialData[0]);

	const [rightValue, setRightValue] = useState<any>(initialTickRateData[0]);

	const handleLeftChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setLeftValue(newValue);
	};

	const [optionsData, setOptionsData] = useState<any>();

	useEffect(() => {
		const strategyName = initialData[+leftValue];
		const tickerTime = String(rightValue.id);

		const rangeButtons = GodFather.buttonGenerator(tickerTime);

		const tmpOptions = {
			...initialOptions,
			rangeSelector: { ...initialOptions.rangeSelector, buttons: rangeButtons },
		};

		// const seriesData = []

		// Look initial data
	}, [leftValue, rightValue]);

	const handleRightChange = (
		event: React.ChangeEvent<{}>,
		newValue: number
	) => {
		setRightValue(newValue);
	};

	return (
		<div style={{ fontPalette: 'light' }}>
			<Grid container>
				{/* Left group */}
				<Grid item xs={6}>
					<Tabs
						value={leftValue}
						onChange={handleLeftChange}
						sx={{ '& .MuiTabs-indicator': { backgroundColor: '#ff4081' } }}
					>
						<Tab
							label='Консервативная стратегия'
							value={initialData[0].value}
							style={{ color: '#fff' }}
						/>
						<Tab
							label='Агрессивная стратегия'
							value={initialData[1].value}
							style={{ color: '#fff' }}
						/>
						<Tab
							label='Средневзвешенная стратегия'
							value={initialData[2].value}
							style={{ color: '#fff' }}
						/>
					</Tabs>
				</Grid>

				{/* Right group */}
				<Grid item xs={6} style={{ textAlign: 'right' }}>
					<Tabs
						value={rightValue}
						onChange={handleRightChange}
						sx={{ '& .MuiTabs-indicator': { backgroundColor: '#ff9800' } }}
					>
						<Tab
							label='10-минутный прогноз'
							value={initialTickRateData[0]}
							style={{ color: '#fff' }}
						/>
						<Tab
							label='Однодневный прогноз'
							value={initialTickRateData[1]}
							style={{ color: '#fff' }}
						/>
						<Tab
							label='Однонедельный прогноз'
							value={initialTickRateData[2]}
							style={{ color: '#fff' }}
						/>
					</Tabs>
				</Grid>
			</Grid>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default RecommendedPage;
