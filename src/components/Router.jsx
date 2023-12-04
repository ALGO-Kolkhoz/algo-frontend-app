import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';
import TickerPage from './pages/TickerPage';
import WelcomePage from './pages/WelcomePage';

const Router = () => {
	return (
		<Routes>
			<Route path='/' Component={WelcomePage} />
			<Route path='/ticker' Component={TickerPage} />
		</Routes>
	);
};

export default Router;
