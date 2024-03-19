import React, { Fragment, useState } from 'react';
import { dateSearch } from '../services/apiService';
import FlightsDisplay from '../components/FlightsDisplay';

const Date = () => {
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [flights, setFlights] = useState([])
	const [loading, setLoading ] = useState(false)
	
	const handleSearch = async () => {
		setLoading(true) 
		try {
			const flights = await dateSearch(startDate, endDate)
			setFlights(flights)
		} catch (error){
			console.log("There's an error fetching flight data", error)
		}
		setLoading(false)
	}

	return <Fragment>
	<div className="search-container">
	  <h1>Search By Date</h1>
	  <div className="form-group">
		<h2>Date Limits</h2>
		<div className="form-group">
		  <label>Start Date</label>
		  <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
		</div>
		<div className="form-group">
		  <label>End Date</label>
		  <input type='date' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
		</div>
		<div className="button-container">
		  <button onClick={handleSearch}>Search</button>
		</div>
		{loading && <p className="loading-message">Loading...</p>}
		<h2>Search results</h2>
		{flights.length > 0 && !loading ? (
			<FlightsDisplay flights={flights} key={flights.length} />
		) : (
			<>Search Something</>
		)}
	  </div>
	</div>
  </Fragment>
}

export default Date