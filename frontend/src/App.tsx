// @ts-ignore 
import React from 'react';
// @ts-ignore 
import { Switch, Route, Routes } from 'react-router-dom';
// @ts-ignore 
import Home from './pages/Home';
// @ts-ignore 
import BO from './pages/BO';
// import About from './pages/About';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bo" element={<BO />} />
			</Routes>
		</div>
	);
};

export default App;