import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = props => {
	return (
		<div className="headerContainer">
			<img className="headerLogo" src="assets/logo.svg" alt="QUIUC" />
			<li className="headerLinks">
				<Link to="about">
					<div className="headerLink">About</div>
				</Link>
				<Link to="people">
					<div className="peopleLink headerLink">People</div>
				</Link>
				<Link to="calendar">
					<div className="headerLink">Calendar</div>
				</Link>
				<Link to="contact">
					<div className="headerLink">Contact</div>
				</Link>
			</li>
		</div>
	);
};

export default Header;
