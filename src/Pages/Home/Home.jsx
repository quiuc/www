import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Home.css';
import Header from '../../Components/Header/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import People from './Components/People';
import Contact from './Components/Contact';

const Home = props => {
	// use the routeName to determine where to scroll to.
	const routeName = props.location.pathname.split('/')[1];

	const aboutRef = useRef(null);
	const peopleRef = useRef(null);
	const contactRef = useRef(null);

	useEffect(() => {
		switch (routeName) {
			case 'about': {
				aboutRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
				window.scrollBy(0, -86); // offset header height
				break;
			}
			case 'people': {
				peopleRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
				window.scrollBy(0, -86); // offset header height
				break;
			}
			case 'contact': {
				contactRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
				break;
			}
			default:
				window.scrollTo(0, 0);
				break;
		}
	});

	return (
		<div className="screenContainer">
			<div className="background" />
			<Header />
			<div className="headerOffset" />
			<Hero />
			<About ref={aboutRef} />
			<People ref={peopleRef} />
			<Contact ref={contactRef} />
		</div>
	);
};

Home.propTypes = {
	location: {
		pathname: PropTypes.string.isRequired
	}
};

export default Home;
