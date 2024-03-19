import React from 'react'
import "../styles/home.css"

const Home = () => {
	return (
	  <div className="home-container">
		<h1 className="title">
		  Flight Searcher
		</h1>
		<div className="welcome-message">
		  <p>Welcome to the Flight searcher. Explore various options in the <strong>navbar</strong>.</p>
		</div>
	  </div>
	);
}

export default Home