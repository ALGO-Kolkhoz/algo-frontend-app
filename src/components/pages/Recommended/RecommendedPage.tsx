import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import darkUnica from 'highcharts/themes/dark-unica';
import { getRandomValue } from '../TickerPage';
import { Tabs, Tab, Grid } from '@mui/material';

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
		// exportButtonTitle: 'Экспорт',
		// printButtonTitle: 'Печать',
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

const RecommendedPage = () => {
	const options = {
		title: {
			text: 'Compare charts',
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
				color: 'pink',
				colorAxis: 'pink',
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
				color: 'green',
				colorAxis: 'green',
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
				color: 'orange',
				colorAxis: 'orange',
				cursor: 'cell',
				marker: {
					enabled: false,
				},
			},
		],
	};
	const [leftValue, setLeftValue] = useState<number>(0);
	const [rightValue, setRightValue] = useState<number>(3);

	const handleLeftChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setLeftValue(newValue);
	};

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
						<Tab label='Tab 1' value={0} style={{ color: '#fff' }} />
						<Tab label='Tab 2' value={1} style={{ color: '#fff' }} />
						<Tab label='Tab 3' value={2} style={{ color: '#fff' }} />
					</Tabs>
				</Grid>

				{/* Right group */}
				<Grid item xs={6} style={{ textAlign: 'right' }}>
					<Tabs
						value={rightValue}
						onChange={handleRightChange}
						sx={{ '& .MuiTabs-indicator': { backgroundColor: '#ff9800' } }}
					>
						<Tab label='Tab 4' value={3} style={{ color: '#fff' }} />
						<Tab label='Tab 5' value={4} style={{ color: '#fff' }} />
						<Tab label='Tab 6' value={5} style={{ color: '#fff' }} />
					</Tabs>
				</Grid>
			</Grid>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default RecommendedPage;
