import React, { forwardRef } from 'react';

import './People.css';
import Person from './Person';

const People = (props, ref) => {
	return (
		<div ref={ref} className="peopleSection sectionContainer">
			<h1>People</h1>
			<div className="peopleList">
				<Person name="Bailey Tincher" role="President" imageSrc="/assets/people/bailey.jpg" />
				<Person name="Guangkuo Liu" role="Education Team Chair" imageSrc="/assets/people/guangkuo.jpg" />
				<Person name="Léo Loubières" role="Education Team Co-Chair" imageSrc="/assets/people/leo.jpg" />
				<Person name="Tracy Tang" role="Outreach Chair" imageSrc="/assets/people/tracy.jpg" />
				<Person name="Jenn Mueng" role="Web Development" imageSrc="/assets/people/jenn.jpg" />
			</div>
		</div>
	);
};

export default forwardRef(People);
