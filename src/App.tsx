import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TickerPage from './components/pages/TickerPage';
import { TickerContext } from './context/TickerContext';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Bar from './components/ui/bar/Bar';
// import BinanceBar from './components/ui/BinanceBar';
import AdvancedBar from './components/ui/AndvancedBar';

function App() {
	const [tickName, setTickName] = useState('PER_DAY');
	return (
		<TickerContext.Provider value={{ tickName, setTickName }}>
			<BrowserRouter>
				<AdvancedBar />
				<Router />
			</BrowserRouter>
		</TickerContext.Provider>
	);
}

export default App;
