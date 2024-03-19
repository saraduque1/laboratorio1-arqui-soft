import React from "react"
import "../styles/flightCard.css"

const FlightCard = ({ flight }) => { 
	return (
	<div className="flight-container">
		<h3>Flight {flight.origin} - {flight.destination}</h3>
		<div className="flight-details">
			<strong>Airline:</strong> <span>{flight.airline}</span>
			<strong>Origin:</strong> <span>{flight.origin}</span>
			<strong>Destination:</strong> <span>{flight.destination}</span>
			<strong>Price:</strong> <span>{flight.price}</span>
			<strong>Departure Date:</strong> <span>{flight.departureDate}</span>
			<strong>Arrival Date:</strong> <span>{flight.arrivalDate}</span>
		</div>
	</div>
	)
}
export default FlightCard