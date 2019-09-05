import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';

import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path={['/', '/home', '/about', '/people', '/calendar', '/contact']} component={Home} />
			</Router>
		</div>
	);
}

export default App;
