import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../features/home/home.css';
import Header from '../components/Header/Header';
import Hero from '../features/home/components/Hero';
import About from '../features/home/components/About';
import People from '../features/home/components/People';
import Events from '../features/home/components/Events';
import Contact from '../features/home/components/Contact';
import PopupOverlay from '../components/boilerplate/Popup';

const Home = props => {
	// use the routeName to determine where to scroll to.
	const routeName = props.location.pathname.split('/')[1];

	const aboutRef = useRef(null);
	const peopleRef = useRef(null);
	const eventsRef = useRef(null);
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
			case 'events': {
				eventsRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
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
			<PopupOverlay>
				<div className="background" />
				<Header />
				<div className="headerOffset" />
				<Hero />
				<About ref={aboutRef} />
				<People ref={peopleRef} />
				<Events ref={eventsRef} />
				<Contact ref={contactRef} />
			</PopupOverlay>
		</div>
	);
};

Home.propTypes = {
	location: {
		pathname: PropTypes.string.isRequired
	}
};

export default Home;
