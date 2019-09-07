import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
			<Helmet>
				<meta charSet="utf-8" />
				<title>QUIUC - Quantum Computing @ UIUC</title>
				<meta
					name="description"
					content="The first and only undergraduate quantum computing organization at the University of Illinois Urbana-Champaign."
				/>
				<link rel="canonical" href="%PUBLIC_URL%" />
				<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Helmet>
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
