import React, { forwardRef } from 'react';
import moment from 'moment';

import EventCard from './EventCard';

import './Events.css';
import { events } from '../resources/events.json';

const Calendar = (props, ref) => {
	const pastEvents = events
		.filter(event => moment(event.date).isBefore(moment.now()))
		.slice(-2)
		.reverse();
	const upcomingEvents = events.filter(event => moment(event.date).isSameOrAfter(moment.now()));
	return (
		<div ref={ref} className="sectionContainer unboundedHeightSection">
			<div className="eventSection upcomingEvents">
				<h3>Upcoming Events</h3>
				{upcomingEvents.length > 0 ? (
					upcomingEvents.map(event => (
						<EventCard
							key={event.id}
							title={event.title}
							date={event.date}
							locationText={event.location.text}
							description={event.description}
						/>
					))
				) : (
					<div className="noUpcomingEventsText">
						No upcoming events, hold on tight!
						<br />
						{"If you can't wait, "}
						<a href="https://discord.gg/PmaXeHPaFs">join our discord</a>.
					</div>
				)}
			</div>
			<div className="eventsContainer">
				<div className="eventSection pastEvents">
					<h3>Past Events</h3>
					{pastEvents.map(event => (
						<EventCard
							key={event.id}
							title={event.title}
							date={event.date}
							locationText={event.location.text}
							description={event.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default forwardRef(Calendar);
