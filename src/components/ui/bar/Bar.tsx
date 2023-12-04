import React from 'react';
import classes from './Bar.module.css';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const Bar = () => {
	const id = nanoid;
	return (
		<div className={classes.bar}>
			<Link to='/ticker'>Ticker</Link>
			<Link to='/'>Home</Link>
		</div>
	);
};

export default Bar;
