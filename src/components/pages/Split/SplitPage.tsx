import React, { useState } from 'react';
import {
	List,
	ListItem,
	IconButton,
	Chip,
	Box,
	Avatar,
	Input,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import classes from './SplitPage.module.css';

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
				<div className='flex-1/3 p-4 bg-gray-500'></div>
				<div className='flex-1/3 p-4 bg-gray-500'></div>
				<div className='flex-1/3 p-4 bg-gray-500'></div>
				<Box display='flex' flexDirection='row'>
					{list2.map((item, index) => (
						<div key={index} style={{ marginRight: '8px' }}>
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
		</div>
	);
};

export default SplitPage;
