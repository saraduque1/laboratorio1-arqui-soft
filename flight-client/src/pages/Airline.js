import React, { Fragment, useState } from 'react';
import { airlineSearch} from '../services/apiService';
import FlightsDisplay from '../components/FlightsDisplay';
import "../styles/searcher.css"

const Airline = () => {
	const [airline, setAirline] = useState('')
	const [flights, setFlights] = useState([])
	const [loading, setLoading ] = useState(false)
	
	const handleSearch = async () => {
		setLoading(true) 
		try {
			const flights = await airlineSearch(airline)
			setFlights(flights)
		} catch (error){
			console.log("There's an error fetching flight data", error)
		}
		setLoading(false)
	}

	return <Fragment>
		<div className="search-container">
			<h1>Search By Airline</h1>
			<div className="form-group">
				<label>Airline</label>
				<input type='text' value={airline} onChange={(e) => setAirline(e.target.value)} />
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
	</Fragment>
}

export default Airline