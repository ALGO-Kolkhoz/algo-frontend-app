import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TickerPage from './components/pages/TickerPage';
import { TickerContext } from './context/TickerContext';

function App() {
	const [tickName, setTickName] = useState('PER_DAY');
	return (
		<TickerContext.Provider value={{ tickName, setTickName }}>
			<TickerPage />
		</TickerContext.Provider>
	);
}

export default App;
