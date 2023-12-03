import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const getRandomValue = (min, max) => {
	return Math.random() * (max - min) + min;
};
const generateMockData = () => {
	const startDate = new Date('2023-01-01');
	const data = [];

	for (let i = 0; i < 30; i++) {
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
const TickerPage = () => {
	const options = {
		title: {
			text: 'Candlestick Chart',
		},
		xAxis: {
			type: 'datetime',
		},
		yAxis: {
			title: {
				text: 'Stock Price',
			},
		},
		series: {
			type: 'candlestick',
			name: 'Stock Price',
			data: generateMockData(),
		},
	};

	return (
		<div style={{ fontPalette: 'light' }}>
			<p>Candles</p>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default TickerPage;
