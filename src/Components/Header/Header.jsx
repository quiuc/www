import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
	return (
		<div className="headerContainer">
			<Link to="/">
				<img className="headerLogo" src="logo.svg" alt="QUIUC" />
			</Link>
			<li className="headerLinks">
				<Link to="about">
					<div className="headerLink">About</div>
				</Link>
				<Link to="people">
					<div className="peopleLink headerLink">People</div>
				</Link>
				<Link to="events">
					<div className="headerLink">Events</div>
				</Link>
				<Link to="contact">
					<div className="headerLink">Contact</div>
				</Link>
			</li>
		</div>
	);
};

export default Header;
