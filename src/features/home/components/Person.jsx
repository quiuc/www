// @flow
import React from 'react';
import PropTypes from 'prop-types';

import './Person.css';

const Person = props => {
	return (
		<div className="personCard">
			<img className="personImage" src={props.imageSrc} alt={props.name} />
			<h4 className="personName">{props.name}</h4>
			<div className="personRole">{props.position}</div>
			{props.resumeLink && (
				<a className="resumeLink" href={props.resumeLink}>
					Resume
				</a>
			)}
		</div>
	);
};

Person.propTypes = {
	name: PropTypes.string.isRequired,
	position: PropTypes.string,
	imageSrc: PropTypes.string,
	resumeLink: PropTypes.string
};

export default Person;
