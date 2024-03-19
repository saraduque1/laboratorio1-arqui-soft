import React, { Fragment, useState } from 'react';
import { destinationSearch } from '../services/apiService';
import FlightsDisplay from '../components/FlightsDisplay';

const Destination = () => {
	const [destination, setDestination] = useState('')
	const [flights, setFlights] = useState([])
	const [loading, setLoading ] = useState(false)
	
	const handleSearch = async () => {
		setLoading(true) 
		try {
			const fetchFlights = await destinationSearch(destination)
			setFlights(fetchFlights)
		} catch (error){
			console.log("There's an error fetching flight data", error)
		}
		setLoading(false)
	}

	return <Fragment>
	  <div className="search-container">
		<h1>Search By Destination</h1>
		<div className="form-group">
		  <div className="form-group">
			<label>Destination</label>
			<input type='text' value={destination} onChange={(e) => setDestination(e.target.value)} />
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

export default Destination