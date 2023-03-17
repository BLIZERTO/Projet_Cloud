// @ts-ignore 
import React from 'react';
// @ts-ignore 
import { Route, Routes } from 'react-router-dom';
// @ts-ignore 
import Home from './pages/Home';
// @ts-ignore 
import BO from './pages/BO';
// @ts-ignore 
import Register from './pages/Register';
import './index.css';
// @ts-ignore 
import Archives from './pages/Archives';
// @ts-ignore
import VolumePage from './pages/Volume';


//add Context with token to prevent connexion if token is empty
const App: React.FC = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bo" element={<BO />} />
				<Route path="/register" element={<Register />} />
				<Route path="/archives" element={<Archives />} />
				<Route path="/archives/:id" element={<VolumePage />} />
			</Routes>
		</div>
	);
};

export default App;