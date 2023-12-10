export interface RangeButton {
	type: string;
	count?: number;
	text: string;
}
export default class GodFather {
	static randomColorGenerator() {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);

		const color = `rgb(${r},${g},${b})`;

		return color;
	}

	static buttonGenerator(tickName: string): RangeButton[] {
		if (tickName === 'PER_10_MIN')
			return [
				{
					type: 'second',
					count: 1,
					text: '1s',
				},
				{
					type: 'minute',
					count: 1,
					text: '1m',
				},
				{
					type: 'hour',
					count: 1,
					text: '1h',
				},
				{
					type: 'all',
					text: 'All',
				},
			];
		if (tickName === 'PER_DAY')
			return [
				{
					type: 'hour',
					count: 1,
					text: '1h',
				},
				{
					type: 'day',
					count: 1,
					text: '1d',
				},
				{
					type: 'week',
					count: 1,
					text: '1w',
				},
				{
					type: 'all',
					text: 'All',
				},
			];
		if (tickName === 'PER_WEEK')
			return [
				{
					type: 'day',
					count: 1,
					text: '1d',
				},
				{
					type: 'week',
					count: 1,
					text: '1w',
				},
				{
					type: 'month',
					count: 1,
					text: '1mo',
				},
				{
					type: 'all',
					text: 'All',
				},
			];
		return [];
	}
}
