import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

/*
    Provide either a props.link or props.action.
*/

const Button = props => {
	const onClick = () => {
		if (typeof props.link === 'string') {
			window.location.href = props.link;
		} else if (typeof props.action === 'function') {
			props.action();
		}
	};
	return (
		<div className="button" onClick={onClick}>
			<div className="buttonText">{props.text}</div>
		</div>
	);
};

Button.propTypes = {
	action: PropTypes.func, // will open link if it is a string, call function if function.
	link: PropTypes.string,
	text: PropTypes.string.isRequired
};

export default Button;
