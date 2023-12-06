import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import darkUnica from 'highcharts/themes/dark-unica';
import { getRandomValue } from '../TickerPage';

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
		],
	};
	return (
		<div style={{ fontPalette: 'light' }}>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default RecommendedPage;
