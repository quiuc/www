import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Home.css';
import Header from '../../Components/Header/Header';
import Hero from './Components/Hero';
import About from './Components/About';

const Home = props => {
	// use the routeName to determine where to scroll to.
	const [routeName] = useState(props.location.pathname.split('/')[1]);

	return (
		<div className="screenContainer">
			<div className="background" />
			<Header />
			<div className="headerOffset" />
			<Hero />
			<About />
		</div>
	);
};

Home.propTypes = {
	location: {
		pathname: PropTypes.string.isRequired
	}
};

export default Home;
