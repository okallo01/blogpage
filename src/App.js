import React from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/ContactUs';
import About from './pages/AboutUs';
import Products from './pages/Products';
import Services from './pages/Services';

import MarerialUIDrawer from "../src/SideNav"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
return (
	<div className="App">
		<h1 className={"headertext"}>Hooperkal</h1>
		<BrowserRouter>
		<MarerialUIDrawer/>
			<Routes>
				<Route exact path='/' element={<Home/>}/>
				<Route exact path='/products' element={<Products/>} /> 
				<Route exact path='/services' element={<Services/>} /> 
				<Route exact path='/about' element={<About/>}/>
				<Route exact path='/contact' element={<Contact/>} /> 
			</Routes>
		</BrowserRouter>
	</div>
);
}

export default App;