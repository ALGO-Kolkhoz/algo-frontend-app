import React, { useState } from 'react';
import {
	List,
	ListItem,
	IconButton,
	Chip,
	Box,
	Avatar,
	TextField,
} from '@mui/material';
// import { Tabs, Tab, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
// import classes from './SplitPage.module.css';
import { Tabs, Tab } from '@mui/material';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import darkUnica from 'highcharts/themes/dark-unica';
import { options } from '../Recommended/RecommendedPage';
import { stocksArr, Stock } from '../../../common/stocks';

interface DataSeries {
	date: Date;
}

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

interface ListItemType {
	label: string;
	avatar: string;
}

const SplitPage = () => {
	const initialList1: { label: string; avatar: string }[] = [
		{ label: 'Item 1', avatar: 'A' },
		{ label: 'Item 2', avatar: 'B' },
		{ label: 'Item 3', avatar: 'C' },
	];
	const [list1, setList1] = useState<typeof stocksArr>(stocksArr);
	const [list2, setList2] = useState<typeof stocksArr>([]);
	const [searchQuery, setSearchQuery] = useState<string>('');

	const handleTransfer = (item: Stock, fromList: Stock[], toList: Stock[]) => {
		const updatedFromList = fromList.filter(
			(i) => JSON.stringify(i) !== JSON.stringify(item)
		);
		const updatedToList = [...toList, item];

		fromList === list1
			? setList1(
					updatedFromList.sort((a, b) => a.fullName.localeCompare(b.fullName))
			  )
			: setList2(
					updatedFromList.sort((a, b) => a.fullName.localeCompare(b.fullName))
			  );
		toList === list1
			? setList1(
					updatedToList.sort((a, b) => a.fullName.localeCompare(b.fullName))
			  )
			: setList2(
					updatedToList.sort((a, b) => a.fullName.localeCompare(b.fullName))
			  );
	};

	const filteredList1: Stock[] = list1.filter((item) =>
		(item.fullName + item.tickerName.replace('$', ''))
			.toLowerCase()
			.includes(searchQuery.toLowerCase())
	);

	const [strategyTabState, setStrategyTabState] = useState(0);

	const tickTimeArr = ['PER_10_MIN', 'PER_DAY', 'PER_WEEK'];

	return (
		<div className='flex flex-1 h-screen'>
			<div className='w-[290px]  overflow-y-auto p-5'>
				<div className=' h-[5000px]'>
					<div className='flex flex-col items-center justify-center'>
						<TextField
							placeholder='Search'
							InputProps={{
								endAdornment: <SearchIcon />,
							}}
							onChange={(e) => setSearchQuery(e.target.value)}
							style={{ color: 'white' }}
						/>

						<List>
							{stocksArr.map((item, index) => (
								<ListItem key={index}>
									<Chip
										label={
											<div className='flex items-center gap-2'>
												<span>{item.tickerName}</span>
											</div>
										}
										color='primary'
										avatar={
											<Avatar>
												<img
													src={process.env.PUBLIC_URL + '/img/' + item.image}
												/>
											</Avatar>
										}
									/>
									<IconButton
										color='success'
										onClick={() => handleTransfer(item, list1, list2)}
									>
										<AddIcon />
									</IconButton>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</div>
			<div className='w-0.5 bg-gray-500'></div>
			<div className='grow min-w-0 flex flex-col'>
				<div className='flex-1/3 p-4 bg-gray-500'>
					<Tabs
						value={strategyTabState}
						onChange={(event, value) => setStrategyTabState(+value)}
						sx={{ '& .MuiTabs-indicator': { backgroundColor: 'magenta' } }}
					>
						<Tab
							label='10-минутный прогноз'
							value={0}
							style={{ color: '#fff' }}
						/>
						<Tab
							label='Однодневный прогноз'
							value={1}
							style={{ color: '#fff' }}
						/>
						<Tab
							label='Прогноз на неделю'
							value={2}
							style={{ color: '#fff' }}
						/>
					</Tabs>
				</div>
				{/* <div className='flex-1/3 p-4 bg-gray-500'></div> */}
				<div className='flex-1/3 p-4 bg-gray-500'>
					<Box display='flex' flexDirection='row'>
						<Chip
							label='Портфель: '
							style={{ marginRight: '8px', marginLeft: '8px' }}
						/>
						{list2.map((item, index) => (
							<div
								key={index}
								style={{ marginRight: '8px', marginLeft: '8px' }}
							>
								<Chip
									label={item.fullName}
									color='primary'
									avatar={<Avatar>{item.image}</Avatar>}
									style={{ color: 'white' }}
								/>
								<IconButton
									color='secondary'
									onClick={() => handleTransfer(item, list2, list1)}
									style={{ color: 'red' }}
								>
									<DeleteIcon />
								</IconButton>
							</div>
						))}
					</Box>
				</div>
				<div className='text-center '>
					<HighchartsReact
						highcharts={Highcharts}
						options={options}
						updateArgs={[true, true, true]}
						containerProps={{ className: 'chartContainer' }}
					/>
					<HighchartsReact
						highcharts={Highcharts}
						options={options}
						updateArgs={[true, true, true]}
						containerProps={{ className: 'chartContainer' }}
					/>
					<HighchartsReact
						highcharts={Highcharts}
						options={options}
						updateArgs={[true, true, true]}
						containerProps={{ className: 'chartContainer' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default SplitPage;
