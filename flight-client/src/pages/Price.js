import React, { Fragment, useState } from 'react';
import { priceSearch} from '../services/apiService';
import FlightsDisplay from '../components/FlightsDisplay';

const Price = () => {
	const [minPrice, setMinPrice] = useState('')
	const [maxPrice, setMaxPrice] = useState('')
	const [flights, setFlights] = useState([])
	const [loading, setLoading ] = useState(false)
	
	const handleSearch = async () => {
		setLoading(true) 
		try {
			const flights = await priceSearch(minPrice, maxPrice)
			setFlights(flights)
		} catch (error){
			console.log("There's an error fetching flight data", error)
		}
		setLoading(false)
	}


	return <Fragment>
	<div className="search-container">
		<h1>Search By Price</h1>
		<div className="form-group">
		<h2>Price Limits</h2>
		<div className="form-group">
			<label>Min Price</label>
			<input type='number' value={minPrice} onChange={(e) => setMinPrice(parseInt(e.target.value))} />
		</div>
		<div className="form-group">
			<label>Max Price</label>
			<input type='number' value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
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

export default Price