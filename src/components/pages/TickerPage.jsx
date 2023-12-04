import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import darkUnica from 'highcharts/themes/dark-unica';

darkUnica(Highcharts);

const getRandomValue = (min, max) => {
	return Math.random() * (max - min) + min;
};
const generateMockData = () => {
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

	for (let i = 2; i < 100; i++) {
		data.push([
			generateMockData()[i][0], // Use the same timestamp as the candlestick data
			getRandomValue(80, 120), // Random linear data
		]);
	}

	const lastDate = new Date(generateMockData()[data.length][0]);

	return data;
};

const TickerPage = () => {
	const options = {
		title: {
			text: 'Candlestick Chart',
		},
		rangeSelector: {
			selected: 1,
		},
		xAxis: {
			type: 'datetime',
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
		series: [
			{
				type: 'candlestick',
				name: 'Stock Price',
				data: generateMockData(),
				dataGrouping: {
					units: [['month', [1]]], // Group data by week (you can adjust this based on your data density)
				},
			},
			{
				type: 'line',
				name: 'Random Linear Data',
				data: generateRandomLinearData(),
				// yAxis: 1, // Link this series to the second y-axis
				color: 'rgb(255, 204, 255)',
			},
			{
				type: 'line',
				name: 'Linear Graph 2',
				data: generateRandomLinearData(),
				// yAxis: 2, // This series uses another secondary y-axis
				color: 'blue', // Set the color for this series
			},
		],
		chart: {
			animation: true,
			type: 'candlestick',
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
