import React from 'react';
import './styles/App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Date from './pages/Date';
import Airline from './pages/Airline';
import Price from './pages/Price';
import Destination from './pages/Destination';
import Origin from './pages/Origin';

function App() {
	return (
    	<div className="App">
			<div>
				<ul className='navbar'>
					<li className='navbar-item'>
						<a href="/" className='navbar-text'>
							<strong>Home</strong>
						</a>
					</li>
					<li className='navbar-item'>
						<a href="/date" className='navbar-text'>
							<strong>Search by Date</strong>
						</a>
					</li>
					<li className='navbar-item'>
						<a href="/airline" className='navbar-text'>
							<strong>Search by Airline</strong>
						</a>
					</li>
					<li className='navbar-item'>
						<a href="/price" className='navbar-text'>
							<strong>Search by Price</strong>
						</a>
					</li>
					<li className='navbar-item'>
						<a href="/destination" className='navbar-text'>
							<strong>Search by Destination</strong>
						</a>
					</li>
					<li className='navbar-item'>
						<a href="/origin" className='navbar-text'>
							<strong>Search by Origin</strong>
						</a>
					</li>
				</ul>
			</div>
			<Routes>
				<Route element={ <Home/> }/>
				<Route path="/" element={ <Home/> }/>
				<Route path="/date" element={ <Date/> }/>
				<Route path="/airline" element={ <Airline/> }/>
				<Route path="/price" element={ <Price/> }/>
				<Route path="/destination" element={ <Destination/> }/>
				<Route path="/origin" element={ <Origin/> }/>
			</Routes>
		</div>
  );
}

export default App;
