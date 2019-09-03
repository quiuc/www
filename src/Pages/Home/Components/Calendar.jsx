import React, { forwardRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './Calendar.css';
import { events } from '../resources/events.json';
import Button from '../../../Components/boilerplate/Button';
import { PopupContext } from '../../../Components/boilerplate/Popup';

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
			<PopupContext.Consumer>
				{({ setPopup }) => <Button text="Hey" action={() => setPopup(() => <div className="boot" />)} />}
			</PopupContext.Consumer>
		</div>
	);
};

export default forwardRef(Calendar);
