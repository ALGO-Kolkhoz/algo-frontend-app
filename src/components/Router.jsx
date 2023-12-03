import React from 'react';
import { Route } from 'react-router';
import { Redirect, Switch, createBrowserRouter } from 'react-router-dom';
import { nanoid } from 'nanoid';
import TickerPage from './pages/TickerPage';
import WelcomePage from './pages/WelcomePage';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <WelcomePage />,
		children: [
			{
				path: 'ticker',
				element: <TickerPage />,
			},
		],
	},
]);

export default Router;
