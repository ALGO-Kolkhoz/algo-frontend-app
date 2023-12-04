import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { nanoid } from 'nanoid';
import TickerPage from './pages/TickerPage';
import WelcomePage from './pages/WelcomePage';
import RecommendedPage from './pages/Recommended/RecommendedPage';

const Router = () => {
	return (
		<Routes>
			<Route id={nanoid()} path='/' Component={WelcomePage} />
			<Route id={nanoid()} path='/ticker' Component={TickerPage} />
			<Route id={nanoid()} path='/recomended' Component={RecommendedPage} />
		</Routes>
	);
};

export default Router;
