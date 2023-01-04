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
		<nav>
			<h1 className={"headertext"}>Hooperkal</h1>
		</nav>
			
		<BrowserRouter>
		<MarerialUIDrawer/>
			<Routes path={<Home/>}>
				<Route exact path='/' element={<Home/>}/>
				<Route path='/products' element={<Products/>} /> 
				<Route path='/services' element={<Services/>} /> 
				<Route path='/about' element={<About/>}/>
				<Route path='/contact' element={<Contact/>} /> 
			</Routes>
		</BrowserRouter>
	</div>
);
}

export default App;