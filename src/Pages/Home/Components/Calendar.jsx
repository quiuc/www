import React, { forwardRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './Calendar.css';
import { events } from '../resources/events.json';

const Calendar = (props, ref) => {
	return (
		<div ref={ref} className="sectionContainer">
			<FullCalendar
				defaultView="dayGridMonth"
				plugins={[dayGridPlugin]}
				events={events}
				eventColor="#c96542"
				eventRender={info => {
					const descElement = document.createElement('div');
					descElement.setAttribute('class', 'calendar-description');
					descElement.innerHTML = info.event.extendedProps.location.text;
					info.el.append(descElement);
				}}
			/>
		</div>
	);
};

export default forwardRef(Calendar);
