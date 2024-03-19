import React from "react";
import FlightCard from "./FlightCard";
import "../styles/flightsDisplay.css"

const FlightsDisplay = ({ flights }) => {
	return (
	  <>
		{flights.length > 0 ? (
		  <div className="flights-container">
			{flights.map((flight, index) => (
			  <div key={index} className="flight-card-container">
				{Object.keys(flight).map(key => (
				  <div key={key} className="flight-card">
					<FlightCard flight={flight[key]} />
				  </div>
				))}
			  </div>
			))}
		  </div>
		) : (
		  <p className="no-flights-message">Flights not found</p>
		)}
	  </>
	);
  };
  
  export default FlightsDisplay;
  