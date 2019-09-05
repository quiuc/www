import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import './EventCard.css';

const EventCard = props => {
	const eventMoment = moment(props.date);
	return (
		<div className="event" key={props.id}>
			<div className="eventDates">{eventMoment.format('MMM D — h:mma')}</div>
			<div className="eventInfoBox">
				<h4 className="eventTitle">{props.title}</h4>
				<div className="eventLocation">{props.locationText}</div>
			</div>
			{props.description && <p className="eventDesc">{props.description}</p>}
		</div>
	);
};

EventCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	locationText: PropTypes.string.isRequired,
	description: PropTypes.string
};

export default EventCard;
