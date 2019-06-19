import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = props => {
    return (
        <div className="headerContainer">
            <img className="headerLogo" src="assets/logo.svg" alt="QUIUC" />
            <li className="headerLinks">
                <Link>
                    <div className="headerLink">People</div>
                </Link>
                <Link>
                    <div className="headerLink">Workshops</div>
                </Link>

                <Link>
                    <div className="headerLink">Calendar</div>
                </Link>
                <Link>
                    <div className="headerLink">Contact</div>
                </Link>
            </li>
        </div>
    );
};

export default Header;
