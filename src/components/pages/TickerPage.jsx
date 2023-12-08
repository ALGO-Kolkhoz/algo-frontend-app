import 'highcharts/modules/accessibility';
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import darkUnica from 'highcharts/themes/dark-unica';

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
		exportButtonTitle: 'Экспорт',
		printButtonTitle: 'Печать',
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

export const getRandomValue = (min, max) => {
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
				color: 'rgb(255, 204, 255)',
				showInNavigator: false,
				marker: {
					enabled: false,
				},
			},
			{
				type: 'line',
				name: 'Linear Graph 2',
				data: generateRandomLinearData(),
				color: 'blue', // Set the color for this series
				showInNavigator: false,
				marker: {
					enabled: false,
				},
			},
		],
	};

	return (
		<div style={{ fontPalette: 'light' }}>
			<p>Candles</p>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
				updateArgs={[true, true, true]}
				containerProps={{ className: 'chartContainer' }}
			/>
		</div>
	);
};

export default TickerPage;
