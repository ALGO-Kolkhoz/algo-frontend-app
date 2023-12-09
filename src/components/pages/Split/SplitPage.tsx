import React, { useState } from 'react';
import {
	List,
	ListItem,
	IconButton,
	Chip,
	Box,
	Avatar,
	Input,
	Typography,
} from '@mui/material';
// import { Tabs, Tab, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
// import classes from './SplitPage.module.css';
import { Tabs, Tab, Grid } from '@mui/material';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import darkUnica from 'highcharts/themes/dark-unica';
import { options } from '../Recommended/RecommendedPage';

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
	const [list1, setList1] = useState<ListItemType[]>(initialList1);
	const [list2, setList2] = useState<ListItemType[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>('');

	const handleTransfer = (
		item: ListItemType,
		fromList: ListItemType[],
		toList: ListItemType[]
	) => {
		const updatedFromList = fromList.filter(
			(i) => JSON.stringify(i) !== JSON.stringify(item)
		);
		const updatedToList = [...toList, item];

		fromList === list1
			? setList1(updatedFromList.sort((a, b) => a.label.localeCompare(b.label)))
			: setList2(
					updatedFromList.sort((a, b) => a.label.localeCompare(b.label))
			  );
		toList === list1
			? setList1(updatedToList.sort((a, b) => a.label.localeCompare(b.label)))
			: setList2(updatedToList.sort((a, b) => a.label.localeCompare(b.label)));
	};

	const filteredList1 = list1.filter((item) =>
		item.label.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const [strategyTabState, setStrategyTabState] = useState(0);

	return (
		<div className='flex flex-1 h-screen'>
			<div className='w-1/3 items-center justify-center'>
				<Input
					placeholder='Search in list 1'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					inputProps={{ style: { color: 'white' } }}
					style={{ color: 'white' }}
				/>
				<List>
					{filteredList1.map((item, index) => (
						<ListItem key={index}>
							<Chip
								label={item.label}
								color='primary'
								avatar={<Avatar>{item.avatar}</Avatar>}
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
			<div className='w-0.5 bg-gray-500'></div>
			<div className='w-2/3 flex flex-col'>
				<div className='flex-1/3 p-4 bg-gray-500'>
					<Tabs
						value={strategyTabState}
						onChange={(event, value) => setStrategyTabState(+value)}
						sx={{ '& .MuiTabs-indicator': { backgroundColor: 'magenta' } }}
					>
						<Tab label='Conservative' value={0} style={{ color: '#fff' }} />
						<Tab label='Aggresive' value={1} style={{ color: '#fff' }} />
						<Tab label='Common' value={2} style={{ color: '#fff' }} />
					</Tabs>
				</div>
				{/* <div className='flex-1/3 p-4 bg-gray-500'></div> */}
				<div className='flex-1/3 p-4 bg-gray-500'>
					<Box display='flex' flexDirection='row'>
						<Chip
							label='Портфель:'
							style={{ marginRight: '8px', marginLeft: '8px' }}
						/>
						{list2.map((item, index) => (
							<div
								key={index}
								style={{ marginRight: '8px', marginLeft: '8px' }}
							>
								<Chip
									label={item.label}
									color='primary'
									avatar={<Avatar>{item.avatar}</Avatar>}
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
					<p className='text-lg text-gray-200'>Per 10 min</p>
					<HighchartsReact
						highcharts={Highcharts}
						options={options}
						updateArgs={[true, true, true]}
						containerProps={{ className: 'chartContainer' }}
					/>
					<p className='text-lg text-gray-200'>Per day</p>
					<HighchartsReact
						highcharts={Highcharts}
						options={options}
						updateArgs={[true, true, true]}
						containerProps={{ className: 'chartContainer' }}
					/>
					<p className='text-lg text-gray-200'>Per week</p>
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
