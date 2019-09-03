import React, { useRef, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import './Home.css';
import Header from '../../Components/Header/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import People from './Components/People';
import Calendar from './Components/Calendar';
import Contact from './Components/Contact';
import PopupOverlay, { popupContext } from '../../Components/boilerplate/Popup';

const Home = props => {
	// use the routeName to determine where to scroll to.
	const routeName = props.location.pathname.split('/')[1];

	const aboutRef = useRef(null);
	const peopleRef = useRef(null);
	const calendarRef = useRef(null);
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
			case 'calendar': {
				calendarRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
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
				<Calendar ref={calendarRef} />
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
